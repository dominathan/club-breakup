import React from 'react';
import ReactDOM from 'react-dom';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  displayName: "Match",
  mixins: [ampersandMixin],

  render() {
    const {matches} = this.props;
    return (
      <span>
        {matches.map((match) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

              <div key={match.id} className="panel panel-primary match-panel" data-id={match.id} data-fake-account-id={match.fake_account_id}>
                <h3 className="">
                    {match.name}
                </h3>
                <div className="match-photo">
                    <img src={match.photo_url} alt={match.name} />
                </div>
                <div className="match-info"></div>
                <h4>{match.sex} | {match.age}</h4>
                <div className="match-bio">
                    <h5>{match.bio.slice(0,255)}</h5>
                </div>
                <a href="#/account/{match.fake_account_id}/match/{match.id}/messages">
                  <button className="btn btn-success btn-lg">Let's Chat</button>
                </a>
              </div>
            </div>

          )
        })}
      </span>
    )


  }
})
