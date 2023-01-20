import {
  StyledTable,
  StyledHead,
  StyledHeadTR,
  StyledTH,
  StyledBody,
  StyledBodyTR,
  StyledTD,
  StyledNone,
} from "./RepoTable.style";
import { RepoData } from "../types";

interface Props {
  repoData: RepoData[];
}

const RepoTable = ({ repoData }: Props) => {
  return (
    <StyledTable data-testid="table" role="table">
      <StyledHead>
        <StyledHeadTR>
          <StyledTH>Profile Pic</StyledTH>
          <StyledTH>Owner Name</StyledTH>
          <StyledTH>Repo Name</StyledTH>
          <StyledTH>Repo URL</StyledTH>
          <StyledTH>Description</StyledTH>
        </StyledHeadTR>
      </StyledHead>

      <StyledBody>
        {repoData.length !== 0 ? (
          repoData.map((repo: RepoData, index: number) => {
            return (
              <StyledBodyTR
                key={index}
                data-testid="repo_detail"
                role="repo_detail"
              >
                <StyledTD>
                  <img src={repo.owner_profile} alt="" height={50} width={50} />
                </StyledTD>
                <StyledTD>{repo.owner_name}</StyledTD>
                <StyledTD>{repo.repo_name}</StyledTD>
                <StyledTD>{repo.repo_url}</StyledTD>
                <StyledTD>{repo.repo_description}</StyledTD>
              </StyledBodyTR>
            );
          })
        ) : (
          <StyledBodyTR>
            <StyledNone>No repo found</StyledNone>
          </StyledBodyTR>
        )}
      </StyledBody>
    </StyledTable>
  );
};

export default RepoTable;
