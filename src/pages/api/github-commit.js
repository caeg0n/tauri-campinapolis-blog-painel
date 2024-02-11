import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { fileName, fileContent, commitMessage } = req.body;
  if (!fileName || !fileContent || !commitMessage) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const githubToken = process.env.GITHUB_TOKEN;
  const owner = 'caeg00n';
  const repo = 'nxt-campinapolis-blog-v2'; 
  const branch = 'main'; 

  try {
    const branchRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${branch}`, {
      headers: { Authorization: `token ${githubToken}` },
    });
    const branchData = await branchRes.json();
    const latestCommitSha = branchData.object.sha;
    const commitRes = await fetch(branchData.object.url, {
      headers: { Authorization: `token ${githubToken}` },
    });
    const commitData = await commitRes.json();
    const baseTreeSha = commitData.tree.sha;
    const blobRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/blobs`, {
      method: 'POST',
      headers: {
        Authorization: `token ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: fileContent,
        encoding: 'base64',
      }),
    });
    const blobData = await blobRes.json();
    const blobSha = blobData.sha;
    const treeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees`, {
      method: 'POST',
      headers: {
        Authorization: `token ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        base_tree: baseTreeSha,
        tree: [
          {
            path: fileName,
            mode: '100644',
            type: 'blob',
            sha: blobSha,
          },
        ],
      }),
    });
    const treeData = await treeRes.json();
    const treeSha = treeData.sha;
    const newCommitRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits`, {
      method: 'POST',
      headers: {
        Authorization: `token ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: commitMessage,
        tree: treeSha,
        parents: [latestCommitSha],
      }),
    });
    const newCommitData = await newCommitRes.json();
    const newCommitSha = newCommitData.sha;
    await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sha: newCommitSha }),
    });

    res.status(200).json({ message: 'Commit successful' });
  } catch (error) {
    console.error('GitHub Commit Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
