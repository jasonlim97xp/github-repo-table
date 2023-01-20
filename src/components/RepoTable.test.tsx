import { render, screen, cleanup } from "@testing-library/react";
import RepoTable from "./RepoTable";

const repoDataMock = [
  {
    repo_name: "grit",
    repo_url: "https://github.com/mojombo/grit",
    repo_description:
      "**Grit is no longer maintained. Check out libgit2/rugged.** Grit gives you object oriented read/write access to Git repositories via Ruby.",
    owner_profile: "https://avatars.githubusercontent.com/u/1?v=4",
    owner_name: "mojombo",
  },
  {
    repo_name: "merb-core",
    repo_url: "https://github.com/wycats/merb-core",
    repo_description: "Merb Core: All you need. None you don't.",
    owner_profile: "https://avatars.githubusercontent.com/u/4?v=4",
    owner_name: "wycats",
  },
  {
    repo_name: "rubinius",
    repo_url: "https://github.com/rubinius/rubinius",
    repo_description: "The Rubinius Language Platform",
    owner_profile: "https://avatars.githubusercontent.com/u/317747?v=4",
    owner_name: "rubinius",
  },
  {
    repo_name: "god",
    repo_url: "https://github.com/mojombo/god",
    repo_description: "Ruby process monitor",
    owner_profile: "https://avatars.githubusercontent.com/u/1?v=4",
    owner_name: "mojombo",
  },
  {
    repo_name: "jsawesome",
    repo_url: "https://github.com/vanpelt/jsawesome",
    repo_description: "Awesome JSON",
    owner_profile: "https://avatars.githubusercontent.com/u/17?v=4",
    owner_name: "vanpelt",
  },
  {
    repo_name: "jspec",
    repo_url: "https://github.com/wycats/jspec",
    repo_description: "A JavaScript BDD Testing Library",
    owner_profile: "https://avatars.githubusercontent.com/u/4?v=4",
    owner_name: "wycats",
  },
  {
    repo_name: "exception_logger",
    repo_url: "https://github.com/defunkt/exception_logger",
    repo_description: "Unmaintained. Sorry.",
    owner_profile: "https://avatars.githubusercontent.com/u/2?v=4",
    owner_name: "defunkt",
  },
  {
    repo_name: "ambition",
    repo_url: "https://github.com/defunkt/ambition",
    repo_description: "include Enumerable — Unmaintained",
    owner_profile: "https://avatars.githubusercontent.com/u/2?v=4",
    owner_name: "defunkt",
  },
  {
    repo_name: "restful-authentication",
    repo_url: "https://github.com/technoweenie/restful-authentication",
    repo_description: "inactive project",
    owner_profile: "https://avatars.githubusercontent.com/u/21?v=4",
    owner_name: "technoweenie",
  },
  {
    repo_name: "attachment_fu",
    repo_url: "https://github.com/technoweenie/attachment_fu",
    repo_description:
      "Treat an ActiveRecord model as a file attachment, storing its patch, size, content type, etc.",
    owner_profile: "https://avatars.githubusercontent.com/u/21?v=4",
    owner_name: "technoweenie",
  },
];

afterEach(() => {
  cleanup();
});

test("rendered table", () => {
  const {} = render(<RepoTable repoData={repoDataMock} />);
  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
  expect(table).toHaveTextContent("mojombo");
});

test("counting initial rendered table", () => {
  const {} = render(<RepoTable repoData={repoDataMock} />);
  const repo_row = screen.getAllByRole("repo_detail");
  expect(repo_row).toHaveLength(10);
  expect(repo_row[0]).toHaveTextContent("grit");
});
