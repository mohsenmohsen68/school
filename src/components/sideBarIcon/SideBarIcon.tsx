"use client";
import React, { useEffect, useState } from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  showSubMenu:boolean,
  onHandleEvent:()=>void
};

export default function SideBarIcon(props: Props): JSX.Element {
 

  //   setShowUsers(false);
  //   setShowArticles(false);
  //   setShowCourses(false);
  //   setShowPosts(false);
  //   setShowComments(false);
  // };

  const clickHandler = () => {
    console.log(props.title)
    switch (props.title) {
      case "users": {
      //  clearWindows();
        // setShowUsers(true);
        console.log('ddd')
      }
      case "comments": {
      //  clearWindows();
        // setShowComments(true);
      }
      case "posts": {
       // clearWindows();
        // setShowPosts(true);
      }
      case "courses": {
       // clearWindows();
        // setShowCourses(true);
      }
      case "articles": {
       // clearWindows();
        // setShowArticles(true);
      }
      default: {
      }
    }
    // console.log(showUsers,showPosts,showComments,showPosts,showCourses,showArticles)
  };
  //console.log(showUsers,showPosts,showComments,showPosts,showCourses,showArticles)
  return (
    <div>
      <div onClick={props.onHandleEvent} className=''>
        {props.icon}
      </div>
     
      {props.showSubMenu && props.title === 'users' && <div>a</div>}
      {props.showSubMenu && props.title === 'courses' && <div>b</div>}
      {props.showSubMenu && props.title === 'articles' && <div>c</div>}
      {props.showSubMenu && props.title === 'posts' && <div>p</div>}
      {props.showSubMenu && props.title === 'comments' && <div>cm</div>}
      
    </div>
  );
}
