import * as React from "react";
import { FC } from "react";
import { Container, Logo, Owner, Title, Header } from "./DetailsPage.styles";
import { getRepository } from "../../api/repository";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { AddRepository } from "../../component/AddRepository/AddRepository";
import { useLocalRepositories } from "../../hook/useLocalRepositories";

export const DetailsPage: FC = () => {
  const { ownerName, repoName } =
    useParams<{ ownerName: string; repoName: string }>();
  const { repositories, addRepository, deleteRepository } =
    useLocalRepositories();

  const { data: repository } = useQuery(
    ["get-repository", ownerName, repoName],
    () => getRepository(ownerName, repoName)
  );

  const localRepository =
    repository &&
    repositories.find(
      (localRepository) => localRepository.id === repository?.id
    );

  return (
    <Container>
      <div>
        <Header>
          <Title>{repository?.name}</Title>
          <Owner href={repository?.owner.html_url}>
            <Logo src={repository?.owner.avatar_url} />
            {repository?.owner.login}
          </Owner>
        </Header>
        <p>{repository?.description}</p>
        <p>
          Language: <strong>{repository?.language}</strong>
        </p>
        <p>
          Created at:{" "}
          <strong>
            {repository?.created_at &&
              new Date(repository?.created_at).toLocaleDateString()}
          </strong>
        </p>
      </div>
      {repository && (
        <AddRepository
          onSelect={(category) => addRepository({ ...repository, category })}
          repositoryCategory={localRepository?.category}
          onDelete={() =>
            localRepository ? deleteRepository(localRepository) : undefined
          }
        />
      )}
    </Container>
  );
};
