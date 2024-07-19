"use client";
import React, { useState } from "react";

type Props = {
  icon: JSX.Element;
  title: string;
};

export default function SideBarIcon(props: Props): JSX.Element {
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const [showCourses, setShowCourses] = useState<boolean>(false);
  const [showArticles, setShowArticles] = useState<boolean>(false);
  const [showComments, setShowComments] = useState<boolean>(false);
  const [showPosts, setShowPosts] = useState<boolean>(false);

  const clickHandler = () => {
    switch (props.title) {
      case "users": {
        setShowUsers(!showUsers);
        setShowArticles(false);
        setShowCourses(false);
        setShowPosts(false);
        setShowComments(false);
      }
      case "comments": {
        setShowUsers(false);
        setShowArticles(false);
        setShowCourses(false);
        setShowPosts(false);
        setShowComments(!showComments);
      }
      case "posts": {
        setShowUsers(false);
        setShowArticles(false);
        setShowCourses(false);
        setShowPosts(!showPosts);
        setShowComments(false);
      }
      case "courses": {
        setShowUsers(false);
        setShowArticles(false);
        setShowCourses(!showCourses);
        setShowPosts(false);
        setShowComments(false);
      }
      case "articles": {
        setShowUsers(false);
        setShowArticles(!showArticles);
        setShowCourses(false);
        setShowPosts(false);
        setShowComments(false);
      }
      default: {
      }
    }
  };

  return (
    <div>
      <div onClick={clickHandler} className="bg-red-500">{props.icon}</div>

      {showUsers && <div>a</div>}
      {showPosts && <div>v</div>}
      {showComments && <div>x</div>}
      {showArticles && <div>z</div>}
      {showPosts && <div>q</div>}
      {showCourses && <div>d</div>}
    </div>
  );
}
