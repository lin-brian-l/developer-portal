/**
 * Copyright (c) 2017-present, smash.gg, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href="https://smash.gg" className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('event-standings.html', this.props.language)}>
              Example Usage
            </a>
            <a
				href="https://developer.smash.gg/explorer"
				target="_blank"
				rel="noreferrer noopener">
              API Explorer
            </a>
			{/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
          </div>
		  <div>
            <h5>smash.gg</h5>
            <a
				href="https://smash.gg"
				target="_blank"
              	rel="noreferrer noopener">
				Home
			</a>
            <a
				href="https://smash.gg/admin/profile/developer"
				target="_blank"
				rel="noreferrer noopener">
				Developer Settings
			</a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://discord.gg/pTSwKj">Discord</a>
            <a
              href="https://twitter.com/smashgg"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
			<a href="https://github.com/smashgg/developer-portal">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/smashgg/developer-portal/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
