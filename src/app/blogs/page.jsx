import { Geist } from "next/font/google";
import Link from "next/link";
import React from "react";

const geist = Geist({
  subsets: ['latin'],
})
const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with JavaScript",
      slug: "getting-started-with-javascript",
      author: {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      category: "Programming",
      tags: ["JavaScript", "Beginner", "Web Development"],
      excerpt:
        "Learn the basics of JavaScript and start building interactive websites.",
      content: "Full blog content goes here...",
      coverImage: "https://source.unsplash.com/800x400/?javascript",
      publishedAt: "2026-04-20T10:00:00Z",
      readTime: 5,
      views: 1200,
      likes: 150,
      commentsCount: 12,
      featured: true,
    },
    {
      id: 2,
      title: "Mastering CSS Flexbox",
      slug: "mastering-css-flexbox",
      author: {
        name: "Jane Smith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      category: "Design",
      tags: ["CSS", "Flexbox", "UI"],
      excerpt: "A practical guide to mastering layout design with Flexbox.",
      content: "Full blog content goes here...",
      coverImage: "https://source.unsplash.com/800x400/?css",
      publishedAt: "2026-04-18T14:30:00Z",
      readTime: 7,
      views: 980,
      likes: 110,
      commentsCount: 8,
      featured: false,
    },
    {
      id: 3,
      title: "Understanding React Hooks",
      slug: "understanding-react-hooks",
      author: {
        name: "Alex Johnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      category: "Frontend",
      tags: ["React", "Hooks", "JavaScript"],
      excerpt: "Dive deep into React Hooks and simplify your component logic.",
      content: "Full blog content goes here...",
      coverImage: "https://source.unsplash.com/800x400/?reactjs",
      publishedAt: "2026-04-15T09:15:00Z",
      readTime: 6,
      views: 1430,
      likes: 200,
      commentsCount: 20,
      featured: true,
    },
    {
      id: 4,
      title: "Node.js API Best Practices",
      slug: "nodejs-api-best-practices",
      author: {
        name: "Emily Davis",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      category: "Backend",
      tags: ["Node.js", "API", "Backend"],
      excerpt: "Build scalable and maintainable APIs using Node.js.",
      content: "Full blog content goes here...",
      coverImage: "https://source.unsplash.com/800x400/?nodejs",
      publishedAt: "2026-04-10T11:45:00Z",
      readTime: 8,
      views: 870,
      likes: 95,
      commentsCount: 6,
      featured: false,
    },
  ];

  return (
    <div className={geist.className}>
      <h2 className="text-3xl text-cyan-300">All Blogs Here</h2>
      <div>
        {blogs.map((blog) => (
          <div className="border-2 w-1/2 mb-5 p-6" key={blog.id}>
            <h4>{blog.title}</h4>
            <Link href={`/blogs/${blog.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
