import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./../../../../Redux/Store";
import ListUsers from "@/components/AdminContentBox/GetUsers/ListUsers";
import AddUser from "@/components/AdminContentBox/AddUser/AddUser";
import RemoveUser from "@/components/AdminContentBox/RemoveUser/RemoveUser";
import EditUser from "@/components/AdminContentBox/EditUser/EditUser";
import AddArticle from "@/components/AdminContentBox/AddArticle/AddArticle";
import ListArticle from "@/components/AdminContentBox/ListArticle/ListArticle";
import AddPost from "@/components/AdminContentBox/AddPost/AddPost";
import ListPost from "./../../../AdminContentBox/ListPost/ListPost";
import ListCourse from "@/components/AdminContentBox/ListCourse/ListCourse";
import ListComment from "@/components/AdminContentBox/ListComment/ListComment"
import AddCourse from "@/components/AdminContentBox/AddCourse/AddCourse";

export default function AdminBox() {
  const useAppSelector = useSelector.withTypes<RootState>();

  const action = useAppSelector((state) => state.menuOptions);
  console.log("action : ", action);
  return (
    <div>
      {/* user menu */}
      {action === "LIST_USER" && (
        <div>
          <ListUsers />
        </div>
      )}
      {action === "ADD_USER" && (
        <div>
          <AddUser />
        </div>
      )}
      {action === "REMOVE_USER" && (
        <div>
          <RemoveUser />
        </div>
      )}
      {action === "EDIT_USER" && (
        <div>
          <EditUser />
        </div>
      )}

      {/* article menu */}
      {action === "ADD_ARTICLE" && (
        <div>
          <AddArticle />
        </div>
      )}
      {action === "LIST_ARTICLE" && (
        <div>
          <ListArticle />
        </div>
      )}

      {/* comment menu */}
      {action === "LIST_COMMENT" && <div>
        <ListComment/>
        </div>}
      {/* {action === "VALIDATE_COMMENT" && <div>validate comment</div>} */}

      {/* post menu */}
      {action === "LIST_POST" && (
        <div>
          <ListPost />
        </div>
      )}
      {action === "ADD_POST" && (
        <div>
          <AddPost />
        </div>
      )}
      {/* course menu */}
      {action === "LIST_COURSE" && <div><ListCourse/></div>}
      {action === "ADD_COURSE" && <div><AddCourse/></div>}
      
    </div>
  );
}
