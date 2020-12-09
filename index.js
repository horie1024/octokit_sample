const { Octokit } = require("@octokit/rest");

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `[YOUR_PERSONAL_ACCESS_TOKEN_HERE]` });

getRepo();

async function getRepo() {
    
    const comments = await octokit.paginate(octokit.issues.listComments, {
        issue_number: 3,
        owner: 'horie1024',
        repo: 'github_actions_' 
            + 'android_sample'
    })

    console.log(comments);
}
