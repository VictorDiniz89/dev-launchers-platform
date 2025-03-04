import React from "react";
import Button from "../../../common/Button";
import Card from "../../../common/Card";
import { UserProjectsContainer } from "./StyledUserProjects";

const UserProjects = ({ myProjects }) => {  
  const noProjectsDisplay = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h3>
        It looks like you&apos;re not currently part of any of our Product Teams...
      </h3>
      <div
        style={{ color: "white", fontSize: "1.3rem", marginBottom: "2rem" }}
      ></div>
      <Button style={{ marginLeft: "auto", marginRight: "auto" }} href="/join">
        Explore Team Openings!
      </Button>
    </div>
  );

  return (
    <UserProjectsContainer myProjects={myProjects}>
      {myProjects?.length > 0 ? (
        <div>
          <h2>My Project Teams</h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {myProjects.map((project) => (
              <Card
                key={Math.random()}
                size="large"
                // isLinkingInside
                // style={{ margin: 0, width: "100%", height: "100%" }}
                cardData={{
                  id: project.id,
                  title: project.title,
                  secondaryText: `Commitment level: ${project.commitmentLevel}`,
                  tags: project.keywords?.map(({ keyword }) => keyword),
                  description: project.catchPhrase,
                  href: `${process.env.NEXT_PUBLIC_FRONT_END_URL}/projects/${project.slug}`,
                  imageSrc: project.heroImage?.url,
                  /*
                                    actions: (
                                        <>
                                        <Link href={`https://devlaunchers.org/projects/${project.slug}`} passHref>
                                            <a>LEARN MORE</a>
                                        </Link>
                                        <Link href="support-us" passHref>
                                            <a>DONATE</a>
                                        </Link>
                                        </>
                                    ),
                                    */
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        noProjectsDisplay
      )}
    </UserProjectsContainer>
  );
};

export default UserProjects;
