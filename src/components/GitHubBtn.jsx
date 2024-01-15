export default function GitHubBtn({url}) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="btn-outline">
      <img src="./img/icons/gitHub-black.svg" alt="" />
      GitHub repo
    </a>
  );
}
