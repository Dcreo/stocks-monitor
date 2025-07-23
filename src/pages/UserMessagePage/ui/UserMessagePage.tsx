import { classNames } from "@/shared/lib";
import * as styles from "./UserMessagePage.module.scss";
import { useGetUserMessageQuery } from "@/entities/Message";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

interface UserMessagePageProps {
  className?: string;
  match?: any;
}

export const UserMessagePage = (props: UserMessagePageProps) => {
  const {
    className,
    match
  } = props;

  let { id } = useParams();

  const {data: message} = useGetUserMessageQuery(id!, {
    skip: !id
  });
  
  return(
    <div className={classNames(styles.UserMessagePage, {}, [className])}>
      <h1>{ message?.title }</h1>
      <div>
        { message?.text }
      </div>
      <hr />
      <div>
        { message?.createdAt?.toString() }
      </div>
    </div>
  )
}
