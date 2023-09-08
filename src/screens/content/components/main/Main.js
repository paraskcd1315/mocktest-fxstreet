import { useState } from "react";
import { useSelector } from "react-redux";
import Post from "../../../../components/post/Post";

export default function Main() {
    const posts = useSelector(state => state.postsReducer.posts);
    const [sectionActive, setSectionActive] = useState(true);
    
    const handleSectionChange = (e) => {
        e.preventDefault();
        setSectionActive(state => !state);
    }

    return <div className="Main">
        <div className="posts">
            <div className="posts-topbar">
                <div className="left">
                    <button className={sectionActive ? "active" : ""} onClick={handleSectionChange}>Latest</button>
                    <button className={!sectionActive ? "active" : ""} onClick={handleSectionChange}>Popular</button>
                </div>
                <div className="right">
                    <span>Show:</span>
                    <select>
                        <option value="All">All</option>
                    </select>
                </div>
            </div>
            <div className="postsContainer">
                {
                    // eslint-disable-next-line
                    posts && posts.length > 0 && posts.map((post) => {
                        if (post.isPopular === !sectionActive) {
                            return <Post key={post.id} id={post.id} title={post.title} content={post.content} imageURL={post.imageUrl} publicationTime={post.publicationTime} feed={post.feed} subFeed={post.subFeed} author={post.author} liked={'liked' in post && post.liked} saved={'saved' in post && post.saved} />
                        }
                        if (!post.isPopular === sectionActive) {
                            return <Post key={post.id} id={post.id} title={post.title} content={post.content} imageURL={post.imageUrl} publicationTime={post.publicationTime} feed={post.feed} subFeed={post.subFeed} author={post.author} liked={'liked' in post && post.liked} />
                        }
                    })
                }
            </div>
        </div>
        <div className="sideSection">
            <div className="box filled">
                <div className="rectangular-placeholder"></div>
                <div className="rectangular-placeholder small"></div>
            </div>
            <div className="box">
                <div className="rectangular-placeholder"></div>
                <div className="circular-placeholder"></div>
            </div>
        </div>
    </div>
}