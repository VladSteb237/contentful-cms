"use client";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

export const client = createClient({
  space: "2eees5q1eein",
  environment: "master",
  accessToken: process.env.NEXT_PUBLIC_API_KEY,
});

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, image, url } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { projects, loading };
};

// client
//   .getEntries({ content_type: "projects" })
//   .then((res) => console.log(res.items))
//   .catch(console.error);
