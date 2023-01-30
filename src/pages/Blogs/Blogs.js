import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';
import './Blogs.css';
import Loading from '../Loading/Loading';

const Blogs = () => {
    const [blogsCard, setBlogsCard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://code-kids-project-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                // setLoading(false);
                setBlogsCard(data)
            })
    }, [])

    // if (loading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            {/* banner section for blogs */}
            <section>
                <div className='blogsBannerImg'>
                    <h1 className='text-4xl font-bold'>Blogs</h1>
                </div>
            </section>

            {/* card section  */}
            <section className='mt-28'>
                <div className='lg:grid grid-cols-3 justify-items-center' data-aos-duration="3000">
                    {
                        blogsCard.map(blogCard => <BlogsCard
                            key={blogCard.id}
                            blogCard={blogCard}></BlogsCard>)
                    }
                </div>
            </section>

            {/* one extra section  */}
        </div>
    );
};

export default Blogs;