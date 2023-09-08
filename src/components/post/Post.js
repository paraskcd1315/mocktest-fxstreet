import HTMLReactParser from "html-react-parser";
import './Post.scss'
import { format, parseISO } from "date-fns";
import { AccessTime, ArrowBackOutlined, Bookmark, BookmarkBorderOutlined, Favorite, FavoriteBorderOutlined, FindInPageOutlined, MoreHoriz, Tune, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { likePost, savePost } from "../../features/posts/postsSlice";
import { useState } from "react";

export default function Post({ id, title, content, imageURL, publicationTime, feed, subFeed, author, liked, saved }) {
    const [filterMenu, setFilterMenu] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);

    const dispatch = useDispatch();

    const likeThePost = (e) => {
        e.preventDefault();
        dispatch(likePost(id));
    } 

    const saveThePost = (e) => {
        e.preventDefault();
        dispatch(savePost(id));
    }

    const showFilterMenu = (e) => {
        e.preventDefault();
        setFilterMenu(state => {
            if (hideMenu) {
                setHideMenu(false);
            }

            return !state;
        });
    }

    const showHideMenu = (e) => {
        e.preventDefault();
        setHideMenu(state => {
            if (filterMenu) {
                setFilterMenu(false);
            }

            return !state;
        });
    }

    return <div key={id} id={id} className="Post">
        <div className="topSection">
            <div className="feedInfo">
                <div className="feed"><FindInPageOutlined />{feed + "  "}</div>
                <div className="divider">▶</div> 
                <div className="subfeed"> {" " + subFeed}</div>
            </div>
            <div className="timestamp">
                <AccessTime /> {format(parseISO(publicationTime), 'MMM d, hh:mm')}
            </div>
        </div>
        <div className="authorDetails">
            <div className="profilePicture">
                <img src={author.imageUrl} alt={author.companyName} />
            </div>
            <div className="authorAndTitle">
                <div className="authorInformation">
                    {author.name} | {author.companyName}
                </div>
                <div className="title">
                    {title}
                </div>
            </div>
        </div>
        <div className="content">
            <div className="textContent">
                {HTMLReactParser(content)}
            </div>
            {
                imageURL !== ""
                ?
                <div className="imageContent">
                    <img src={imageURL} alt={title} />
                </div>
                :
                ""
            }
            
        </div>
        <div className="bottomSection">
            <button className={liked ? "likeButton liked" : "likeButton"} onClick={likeThePost}>
                {
                    liked 
                    ?
                    (<><Favorite /> Liked!</>)
                    :
                    (<><FavoriteBorderOutlined /> Like</>)
                }
            </button>
            <button className={saved ? "saveButton saved" : "saveButton"} onClick={saveThePost}>
                {
                    saved 
                    ?
                    (<><Bookmark /> Saved!</>)
                    :
                    (<><BookmarkBorderOutlined /> Save</>)
                }
            </button>
            <button className="more" onClick={showFilterMenu}>
                <MoreHoriz />
            </button>
        </div>
        {
            filterMenu 
            ?
            (
            <div className="extraMenu">
                <div className="extraButton" onClick={showHideMenu}>
                    <VisibilityOff /> Hide
                </div>
                <div className="extraButton">
                    <Tune /> Improve my feed
                </div>
            </div>
            )
            :
            ""
        }
        {
            hideMenu
            ?
            (
            <div className="extraMenu">
                <div className="extraButton colored" onClick={showFilterMenu}>
                    <ArrowBackOutlined /> Tell us why
                </div>
                <div className="extraButton">
                    <input type="checkbox" class="checkbox-round" /> I'm not interested in this author
                </div>
                <div className="extraButton">
                    <input type="checkbox" class="checkbox-round" /> I’m not interested in this topic
                </div>
                <div className="extraButton">
                    <input type="checkbox" class="checkbox-round" /> I've seen too many posts on this topic
                </div>
                <div className="extraButton">
                    <input type="checkbox" class="checkbox-round" /> The information is incorrect
                </div>
                <div className="extraButton">
                    <input type="checkbox" class="checkbox-round" /> I've seen this post before
                </div>
                <div className="extraButton">
                    <input type="checkbox" class="checkbox-round" /> Other reasons
                </div>
                <button>
                    Hide Content
                </button>
            </div>
            )
            :
            ""
        }
    </div>
}