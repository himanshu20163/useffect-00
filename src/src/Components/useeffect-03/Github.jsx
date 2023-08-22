import React, { useState } from 'react'
import './githubox.css';

const Github = () => {
  const [state, Setstate] = useState([]);
  const [userdetails, SetUser] = useState([]);
  const [username, Setname] = useState('');

  const fetch_github_user = async () => {
    const ans = await fetch(`https://api.github.com/users/${username}`);
    const response = await ans.json();
    Setstate([response]);
    console.log(state);

    const fetchRepos = async () => {
      const res = await fetch(response.repos_url);
      const data = await res.json();
      SetUser(data);
      console.log(userdetails);
    };
    fetchRepos();
  }



  return (
    <div className='github-box'>
      <div className="searchbox">
        <h1>Search for username</h1>
        <span>
          <input type='text' onChange={(e) => {
            Setname(e.target.value);
          }}></input>
          <button onClick={fetch_github_user}>Search</button>
        </span>
      </div>
      {
        state == '' ? 'null' :
          <div>
            return(
            <div className='github-profile-box'>
              <div className="profile-image">
                {
                  state.map((ele) => {
                    return (
                      <div>
                      <div style={{display:"flex"}}>
                        <div className="profile-left">
                          <img src={ele.avatar_url} height="150px" width="250px" />
                        </div>
                        <div className="profile-right">
                          <h2>{ele.login}</h2>
                        </div>
                      </div>
                      <div className='profile-details'>
                         <div>
                          <h4>
                            Followers
                          </h4>
                          <p>{ele.followers}</p>
                          </div>
                          <div>
                          <h4>
                            Repo
                          </h4>
                          <p>{ele.public_repos}</p>
                          </div>
                          {/* following */}
                          <div>
                          <h4>
                            Following
                          </h4>
                          <p>{ele.following}</p>
                          {
                            console.log(userdetails)
                          }
                          </div>
                      </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            )
          </div>
      }

    </div>
  )
}

export default Github