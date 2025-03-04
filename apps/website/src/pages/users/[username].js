import React from "react";
import axios from "axios";
import UserProfile from "../../components/modules/UserProfile";

export const getStaticPaths = async () => {
  const { data } = await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
    },
  });

  const paths = data
    .filter(({ username }) => username)
    .map(({ username }) => ({
      params: { username },
    }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { username } = context.params;
  const { data: user } = await axios(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/users?username_eq=${encodeURI(username)}`
  );

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: user[0] },
    revalidate: 20,
  };
};

export default function UserProfilePage({ user }) {
  return (
    <div>
      <UserProfile otherUser={user} />
    </div>
  );
}
