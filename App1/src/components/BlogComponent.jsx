import { Link, Outlet, useParams } from "react-router-dom";
export const blogPosts = [
  {
    id: 1,
    title: "Welcome to My First Blog: A Journey of Self-Discovery",
    description:
      "In this blog, I'll be sharing my personal experiences and insights on life, love, and everything in between. Join me on this journey of self-discovery as we explore the depths of the human psyche and uncover the secrets to living a fulfilling life.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 2,
    title: "The Power of Positive Thinking: How to Transform Your Life",
    description:
      "In this post, I'll be discussing the power of positive thinking and how it can transform your life. From changing your mindset to practicing gratitude, I'll be sharing practical tips and techniques to help you cultivate a more positive outlook on life.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 3,
    title: "The Art of Mindfulness: Finding Peace in a Busy World",
    description:
      "In this post, I'll be exploring the art of mindfulness and how it can help you find peace in a busy world. From meditation to breathing exercises, I'll be sharing practical techniques to help you cultivate a more mindful and present way of living.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 4,
    title: "The Importance of Self-Care: How to Prioritize Your Well-Being",
    description:
      "In this post, I'll be discussing the importance of self-care and how to prioritize your well-being. From setting boundaries to practicing self-compassion, I'll be sharing practical tips and techniques to help you take care of yourself both physically and mentally.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 5,
    title: "The Power of Gratitude: How to Cultivate a Grateful Heart",
    description:
      "In this post, I'll be exploring the power of gratitude and how it can transform your life. From keeping a gratitude journal to practicing random acts of kindness, I'll be sharing practical tips and techniques to help you cultivate a more grateful heart.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 6,
    title: "The Art of Forgiveness: How to Let Go of Resentment and Anger",
    description:
      "In this post, I'll be discussing the art of forgiveness and how to let go of resentment and anger. From practicing empathy to reframing your perspective, I'll be sharing practical tips and techniques to help you cultivate a more forgiving and compassionate mindset.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 7,
    title:
      "The Importance of Connection: How to Build Meaningful Relationships",
    description:
      "In this post, I'll be discussing the importance of connection and how to build meaningful relationships. From practicing active listening to expressing vulnerability, I'll be sharing practical tips and techniques to help you cultivate deeper and more fulfilling connections with others.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 8,
    title: "The Power of Intention: How to Manifest Your Dreams",
    description:
      "In this post, I'll be exploring the power of intention and how to manifest your dreams. From setting clear goals to visualizing your desired outcome, I'll be sharing practical tips and techniques to help you harness the power of your thoughts and beliefs.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 9,
    title: "The Art of Letting Go: How to Release Attachments and Find Freedom",
    description:
      "In this post, I'll be discussing the art of letting go and how to release attachments and find freedom. From practicing acceptance to embracing impermanence, I'll be sharing practical tips and techniques to help you cultivate a more peaceful and liberated way of living.",
    date: "2020-01-01",
    image: "https://picsum.photos/id/100/200/300",
  },
  {
    id: 10,
    title: "The Importance of Self-Reflection: How to Grow and Evolve",
    description:
      "In this post, I'll be discussing the importance of self-reflection and how to grow and evolve. From journaling to seeking feedback, I'll be sharing practical tips and techniques to help you cultivate a more introspective and self-aware way",
  },
]; 

export const DisplayBlog = ({ id, title, description, date, image }) => {
  return (
    <Link to={`/blogs/${id}`} className="cover">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
    </Link>
  );
};

export const BlogComponent = () => {
  const { id } = useParams();
  return (
    <div className="blog-container">
      {!id ? (
        <>
          <div className="blog-posts">
            {blogPosts.map((blog) => DisplayBlog(blog))}
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

