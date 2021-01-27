<svg xmlns="http://www.w3.org/2000/svg" width="480" height="1152" class="">

  <defs><style/></defs>
  <style>/* SVG global context */
  svg {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    font-size: 14px;
    color: #777777;
  }

/* Headers */
  h1, h2, h3 {
    margin: 8px 0 2px;
    padding: 0;
    color: #0366d6;
    font-weight: normal;
  }
  h1 svg, h2 svg, h3 svg {
    fill: currentColor;
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
  }
  h3 {
    font-size: 14px;
  }

/* Fields */
  section &gt; .field {
    margin-left: 5px;
    margin-right: 5px;
  }
  .field {
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    white-space: nowrap;
  }
  .field svg {
    margin: 0 8px;
    fill: #959da5;
    flex-shrink: 0;
  }
  .field.error {
    color: #cb2431;
  }
  .field.error svg {
    fill: #cb2431;
  }

/* Displays */
  .row {
    display: flex;
  }
  .row section {
    flex: 1 1 0;
  }
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .center {
    justify-content: center;
  }
  .horizontal {
    justify-content: space-around;
  }
  .horizontal-wrap {
    flex-wrap: wrap;
  }
  .horizontal .field {
    flex: 1 1 0;
  }
  .no-wrap {
    white-space: nowrap;
  }
  .fill-width {
    width: 100%;
  }
  .margin-bottom {
    margin-bottom: 16px;
  }

/* User avatar */
  .avatar {
    border-radius: 50%;
    margin: 0 6px;
  }

/* Commit calendar */
  .calendar.field {
    margin: 4px 0;
    margin-left: 7px;
  }
  .calendar .day {
    outline: 1px solid rgba(27,31,35,.04);
    outline-offset: -1px;
  }

/* Progress bars */
  svg.bar {
    margin: 4px 0;
  }

/* Language */
  .field.language {
    margin: 0 8px;
    flex-grow: 0;
  }

  .field.language small {
    margin-left: 4px;
    color: #666666;
  }

/* Labels */
  .label {
    background-color: #F1F8FF;
    color: #0366D6;
    padding: 0 10px;
    font-weight: 500;
    line-height: 22px;
    margin: 2px 5px;
    white-space: nowrap;
    border-radius: 32px;
    font-size: 12px;
  }

  .label:hover {
    background-color: #DDEEFF;
    cursor: pointer;
  }

/* Habits */
  .habits {
    margin: 0;
    list-style-type: none;
    padding-left: 37px;
  }

/* Footer */
  footer {
    margin-top: 8px;
    font-size: 10px;
    font-style: italic;
    color: #666666;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

/* Speed test categories */
  .categories {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 4px;
  }
  .categorie {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0;
  }

/* Gauges */
  .gauge {
    stroke-linecap: round;
    fill: none;
  }
  .gauge.high {
    color: #18b663;
  }
  .gauge.average {
    color: #fb8c00;
  }
  .gauge.low {
    color: #e53935;
  }
  .gauge-base, .gauge-arc {
    stroke: currentColor;
    stroke-width: 10;
  }
  .gauge-base {
    stroke-opacity: .2;
  }
  .gauge-arc {
    fill: none;
    stroke-dashoffset: 0;
    animation-delay: 250ms;
    animation: animation-gauge 1s ease forwards
  }
  .gauge text {
    fill: currentColor;
    font-size: 40px;
    font-family: monospace;
    text-anchor: middle;
    font-weight: 600;
  }
  .gauge .title {
    font-size: 18px;
    color: #777777;
  }
  @keyframes animation-gauge {
    from {
      stroke-dasharray: 0 329;
    }
  }
  .audits {
    margin-top: 8px;
  }
  .audit.text {
    min-width: 42px;
  }
  .audit svg {
    margin: 0;
  }
  .audit.high {
    fill: #18b663;
  }
  .audit.average {
    fill: #fb8c00;
  }
  .audit.low {
    fill: #e53935;
  }

  .screenshot {
    width: 452px;
    height: 315px;
    margin: 8px 14px 4px;
    border-radius: 5px;
  }

/* Music plugin */
  .tracklist {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 28px;
    margin-top: 4px;
    width: 100%;
  }
  .track {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }
  .track img {
    margin: 0 10px;
    border-radius: 7px;
  }
  .track .name {
    font-size: 14px;
    line-height: 14px;
  }
  .track .artist {
    font-size: 12px;
    color: #666666;
  }

/* Posts plugin */
  .post {
    align-items: flex-start;
  }
  .post .infos {
    display: flex;
    margin-bottom: 4px;
  }
  .post .infos .title {
    font-size: 14px;
    width: 380px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 40px;;
  }
  .post .infos .date {
    flex-shrink: 0;
    font-size: 12px;
    color: #666666;
    width: 60px;
    padding-top: 1px;
  }

/* Topics */
  .topics {
    display: flex;
    flex-wrap: wrap;
  }

  .topics img {
    border-radius: 5px;
    margin: 4px;
  }

/* Tweets */
  .tweet {
    font-size: 13px;
    margin-top: 6px;
    margin-bottom: 16px;
    margin-left: 18px;
    border-left: 3px solid #777777B2;
    padding-left: 6px;
  }

  .tweet .mention, .tweet .link, .tweet .hashtag {
    color: #0366d6;
    margin: 0 4px;
  }

  .tweet .date {
    margin: 6px 0;
    font-size: 12px;
    color: #666666;
  }

/* Charts and graphs */
  .chart {
    padding: 0 8px;
  }

  .chart-bars {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin: 8px 0 4px;
    flex-grow: 1;
  }

  .chart-bars .entry {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    color: #666666;
  }

  .chart-bars .entry .value {
    font-size: 7px;
  }

  .chart-bars .bar {
    width: 7px;
    background-color: var(--color-calendar-graph-day-bg);
    border: 1px solid var(--color-calendar-graph-day-border);
    border-radius: 5px;
  }

  .chart-bars.horizontal {
    flex-direction: column;
    align-items: space-between;
    height: 100%;
  }

  .chart-bars.horizontal .entry {
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  .chart-bars.horizontal .entry .name {
    flex-shrink: 0;
    text-align: right;
    min-width: 30%;
  }

  .chart-bars .entry .bottom {
    margin-bottom: -1rem;
    line-height: 1rem;
  }

  .chart-bars.horizontal .bar {
    height: 7px;
    width: auto;
    margin: 0 6px;
  }

/* Repository */
  .repository {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 6px 0;
  }

  .repository .name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 440px;
  }

  .repository .name span:first-child {
    color: #58a6ff;
  }

  .repository .name span:last-child {
    color: #666666;
    font-size: 13px;
  }

  .repository .description {
    display: block;
    width: 440px;
    white-space: normal;
  }

  .repository .description, .repository .infos {
    color: #666666;
    margin-left: 38px;
    font-size: 13px;
  }

  .repository .infos &gt; div {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  .repository .infos svg {
    margin: 0;
    margin-right: 4px;
  }

/* Activity */
  .activity {
    margin-bottom: 12px;
  }

  .activity .field {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 450px;
    white-space: nowrap;
    margin-bottom: 0;
  }

  .activity .repo, .activity .issue, .activity .commit .sha {
    color: #58a6ff;
    margin: 0 4px;
  }

  .activity .code {
    background-color: #7777771F;
    padding: 1px 5px;
    font-size: 80%;
    border-radius: 6px;
    color: #777777;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    margin: 0 4px -3px;
  }

  .activity .bold {
    font-weight: 600;
    margin: 0 4px;
  }

  .activity .details {
    padding-left: 42px;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    color: #666666;
  }

  .activity .details &gt; div {
    display: flex;
    align-items: center;
  }

  .activity .commit .sha {
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  }

  .activity .commit .message {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 360px;
    white-space: nowrap;
  }

  .activity .details .comment {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 420px;
    margin-top: 6px;
    border-left: 3px solid #777777B2;
    padding-left: 6px;
    max-height: 38px;
    /* May not work in all browsers */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

/* People */
  .people {
    padding: 0 10px;
  }

  .people .avatar {
    margin: 0 2px;
  }

/* Fade animation */
  .af {
    opacity: 0;
    animation: animation-fade 1s ease forwards;
  }
  @keyframes animation-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

/* Cake day */
  .cakeday, .cakeday svg {
    animation: animation-rainbow 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }

/* Rainbow animation */
  @keyframes animation-rainbow {
    0%, 100%{ color: #7F00FF; fill: #7F00FF; }
    14% { color: #A933FF; fill: #A933FF; }
    29%{ color: #007FFF; fill: #007FFF; }
    43%{ color: #00FF7F; fill: #00FF7F; }
		57%{ color: #FFFF00; fill: #FFFF00; }
		71%{ color: #FF7F00; fill: #FF7F00; }
		86%{ color: #FF0000; fill: #FF0000; }
  }

/* Calendar */
  :root {
    --color-calendar-graph-day-bg: #ebedf0;
    --color-calendar-graph-day-border: rgba(27,31,35,0.06);
    --color-calendar-graph-day-L1-bg: #9be9a8;
    --color-calendar-graph-day-L2-bg: #40c463;
    --color-calendar-graph-day-L3-bg: #30a14e;
    --color-calendar-graph-day-L4-bg: #216e39;
    --color-calendar-halloween-graph-day-L1-bg: #ffee4a;
    --color-calendar-halloween-graph-day-L2-bg: #ffc501;
    --color-calendar-halloween-graph-day-L3-bg: #fe9600;
    --color-calendar-halloween-graph-day-L4-bg: #03001c;
    --color-calendar-graph-day-L4-border: rgba(27,31,35,0.06);
    --color-calendar-graph-day-L3-border: rgba(27,31,35,0.06);
    --color-calendar-graph-day-L2-border: rgba(27,31,35,0.06);
    --color-calendar-graph-day-L1-border: rgba(27,31,35,0.06);
  }

/* End delimiter */
  #metrics-end {
    width: 100%;
  }

  .no-animations * {
    transition-delay: 0s !important;
    transition-duration: 0s !important;
    animation-delay: -0.0001s !important;
    animation-duration: 0s !important;
    animation-play-state: paused !important;
    caret-color: transparent !important;
  }</style>

  <foreignObject x="0" y="0" width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink">
      
        
  <section>
    <h1 class="field">
      <img class="avatar" src="data:image/png;base64,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" width="20" height="20" />
      <span>Arthur</span>
    </h1>
    <div class="row">
      <section>
        <div class="field ">
          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"/></svg>
            Joined GitHub 2 years ago
          
        </div>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"/></svg>
          Followed by 13 users
        </div>
        
      </section>
      <section>
        <div class="field calendar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 11" width="210" height="16">
            <g>
              
                <rect class="day" x="0" y="0" width="11" height="11" fill="#216e39" rx="2" ry="2"/>
              
                <rect class="day" x="15" y="0" width="11" height="11" fill="#216e39" rx="2" ry="2"/>
              
                <rect class="day" x="30" y="0" width="11" height="11" fill="#40c463" rx="2" ry="2"/>
              
                <rect class="day" x="45" y="0" width="11" height="11" fill="#ebedf0" rx="2" ry="2"/>
              
                <rect class="day" x="60" y="0" width="11" height="11" fill="#ebedf0" rx="2" ry="2"/>
              
                <rect class="day" x="75" y="0" width="11" height="11" fill="#9be9a8" rx="2" ry="2"/>
              
                <rect class="day" x="90" y="0" width="11" height="11" fill="#9be9a8" rx="2" ry="2"/>
              
                <rect class="day" x="105" y="0" width="11" height="11" fill="#40c463" rx="2" ry="2"/>
              
                <rect class="day" x="120" y="0" width="11" height="11" fill="#40c463" rx="2" ry="2"/>
              
                <rect class="day" x="135" y="0" width="11" height="11" fill="#9be9a8" rx="2" ry="2"/>
              
                <rect class="day" x="150" y="0" width="11" height="11" fill="#216e39" rx="2" ry="2"/>
              
                <rect class="day" x="165" y="0" width="11" height="11" fill="#40c463" rx="2" ry="2"/>
              
                <rect class="day" x="180" y="0" width="11" height="11" fill="#40c463" rx="2" ry="2"/>
              
                <rect class="day" x="195" y="0" width="11" height="11" fill="#ebedf0" rx="2" ry="2"/>
              
            </g>
          </svg>
        </div>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z"/></svg>
          Contributed to 44 repositories
        </div>
      </section>
    </div>
  </section>

      
        <div class="row">
  
    <section>
      <h2 class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"/></svg>
        Activity
      </h2>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>
        1313 Commits
      </div>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.5 1.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v7.736a.75.75 0 101.5 0V1.75A1.75 1.75 0 0011.25 0h-8.5A1.75 1.75 0 001 1.75v11.5c0 .966.784 1.75 1.75 1.75h3.17a.75.75 0 000-1.5H2.75a.25.25 0 01-.25-.25V1.75zM4.75 4a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM4 7.75A.75.75 0 014.75 7h2a.75.75 0 010 1.5h-2A.75.75 0 014 7.75zm11.774 3.537a.75.75 0 00-1.048-1.074L10.7 14.145 9.281 12.72a.75.75 0 00-1.062 1.058l1.943 1.95a.75.75 0 001.055.008l4.557-4.45z"/></svg>
        2 Pull requests reviewed
      </div>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/></svg>
        19 Pull requests opened
      </div>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/></svg>
        8 Issues opened
      </div>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/></svg>
        33 issue comments
      </div>
    </section>
  
  
    <section>
      <h2 class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.326 1.973a1.2 1.2 0 011.49-.832c.387.112.977.307 1.575.602.586.291 1.243.71 1.7 1.296.022.027.042.056.061.084A13.22 13.22 0 018 3c.67 0 1.289.037 1.861.108l.051-.07c.457-.586 1.114-1.004 1.7-1.295a9.654 9.654 0 011.576-.602 1.2 1.2 0 011.49.832c.14.493.356 1.347.479 2.29.079.604.123 1.28.07 1.936.541.977.773 2.11.773 3.301C16 13 14.5 15 8 15s-8-2-8-5.5c0-1.034.238-2.128.795-3.117-.08-.712-.034-1.46.052-2.12.122-.943.34-1.797.479-2.29zM8 13.065c6 0 6.5-2 6-4.27C13.363 5.905 11.25 5 8 5s-5.363.904-6 3.796c-.5 2.27 0 4.27 6 4.27z"/><path d="M4 8a1 1 0 012 0v1a1 1 0 01-2 0V8zm2.078 2.492c-.083-.264.146-.492.422-.492h3c.276 0 .505.228.422.492C9.67 11.304 8.834 12 8 12c-.834 0-1.669-.696-1.922-1.508zM10 8a1 1 0 112 0v1a1 1 0 11-2 0V8z"/></svg>              Community stats
      </h2>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"/></svg>
        Member of 1 organization
      </div>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"/></svg>
        Following 26 users
      </div>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"/></svg>
        Sponsoring 0 repositories
      </div>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/></svg>
        Starred 68 repositories
      </div>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg>
        Watching 27 repositories
      </div>
    </section>
  
</div>
      
        
  <section>
    <h2 class="field">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
      39 Repositories 
    </h2>
    <div class="row">
      <section>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"/></svg>
          
            Prefers MIT license
          
        </div>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"/></svg>
          17 Releases
        </div>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"/></svg>
          0 Packages
        </div>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M2.5 3.5c0-.133.058-.318.282-.55.227-.237.592-.484 1.1-.708C4.899 1.795 6.354 1.5 8 1.5c1.647 0 3.102.295 4.117.742.51.224.874.47 1.101.707.224.233.282.418.282.551 0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 5.205 9.646 5.5 8 5.5c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707-.224-.233-.282-.418-.282-.551zM1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591v-9zM2.5 8V5.724c.241.15.503.286.779.407C4.525 6.68 6.195 7 8 7c1.805 0 3.475-.32 4.722-.869.275-.121.537-.257.778-.407V8c0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 9.705 9.646 10 8 10c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707C2.558 8.318 2.5 8.133 2.5 8zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.236 6.236 0 01-.779-.406z"/></svg>
          220 MB used
        </div>
        
      </section>
      <section>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"/></svg>
          0 Sponsors
        </div>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/></svg>
          6 Stargazers
        </div>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>
          9 Forks
        </div>
        <div class="field">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg>
          31 Watchers
        </div>
        
      </section>
    </div>
  </section>

      
        
  <div class="row">

    <section class="column">
      <h3>Issues</h3>
      
        <svg class="bar" xmlns="http://www.w3.org/2000/svg" width="220" height="8">
          <mask id="issues-bar">
            <rect x="0" y="0" width="220" height="8" fill="white" rx="5"/>
          </mask>
          <rect mask="url(#issues-bar)" x="0" y="0" width="0" height="8" fill="#d1d5da"/>
          <rect mask="url(#issues-bar)" x="0" y="0" width="220" height="8" fill="#d73a49"/>
          <rect mask="url(#issues-bar)" x="220" y="0" width="0" height="8" fill="#28a745"/>
        </svg>
        <div class="field horizontal fill-width">
          <div class="field center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#d73a49" fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"/></svg>
            <span class="no-wrap">2 Closed</span>
          </div>
          <div class="field center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#28a745" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/></svg>
            <span class="no-wrap">0 Open</span>
          </div>
        </div>
      
    </section>

    <section class="column">
      <h3>Pull requests</h3>
      
        <svg class="bar" xmlns="http://www.w3.org/2000/svg" width="220" height="8">
          <mask id="pr-bar">
            <rect x="0" y="0" width="220" height="8" fill="white" rx="5"/>
          </mask>
          <rect mask="url(#pr-bar)" x="0" y="0" width="0" height="8" fill="#d1d5da"/>
          <rect mask="url(#pr-bar)" x="0" y="0" width="195.55555555555554" height="8" fill="#6f42c1"/>
          <rect mask="url(#pr-bar)" x="195.55555555555554" y="0" width="24.444444444444457" height="8" fill="#28a745"/>
        </svg>
        <div class="field horizontal fill-width">
          <div class="field center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#6f42c1" fill-rule="evenodd" d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>
            <span class="no-wrap">8 Merged</span>
          </div>
          <div class="field center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#28a745" fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/></svg>
            <span class="no-wrap">1 Open</span>
          </div>
        </div>
      
    </section>

  </div>

      
        
  <section class="column">
    <h3>Most used languages</h3>
    
      <svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">
        <mask id="languages-bar">
          <rect x="0" y="0" width="460" height="8" fill="white" rx="5"/>
        </mask>
        <rect mask="url(#languages-bar)" x="0" y="0" width="0" height="8" fill="#d1d5da"/>
        
          <rect mask="url(#languages-bar)" x="0" y="0" width="137.27420692365877" height="8" fill="#f1e05a"/>
        
          <rect mask="url(#languages-bar)" x="137.27420692365877" y="0" width="112.1876451178713" height="8" fill="#563d7c"/>
        
          <rect mask="url(#languages-bar)" x="249.46185204153005" y="0" width="92.07488441844639" height="8" fill="#3572A5"/>
        
          <rect mask="url(#languages-bar)" x="341.53673645997645" y="0" width="57.875460589009045" height="8" fill="#178600"/>
        
          <rect mask="url(#languages-bar)" x="399.4121970489855" y="0" width="26.072112848860684" height="8" fill="#e34c26"/>
        
          <rect mask="url(#languages-bar)" x="425.4843098978461" y="0" width="13.290364923328786" height="8" fill="#b07219"/>
        
          <rect mask="url(#languages-bar)" x="438.7746748211749" y="0" width="8.38119704010817" height="8" fill="#4F5D95"/>
        
          <rect mask="url(#languages-bar)" x="447.1558718612831" y="0" width="4.341127747807371" height="8" fill="#2b7489"/>
        
      </svg>
      <div class="field center horizontal-wrap fill-width">
        
          <div class="field center no-wrap language">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#f1e05a" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
            JavaScript
          </div>
        
          <div class="field center no-wrap language">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#563d7c" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
            CSS
          </div>
        
          <div class="field center no-wrap language">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#3572A5" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
            Python
          </div>
        
          <div class="field center no-wrap language">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#178600" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
            C#
          </div>
        
          <div class="field center no-wrap language">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#e34c26" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
            HTML
          </div>
        
          <div class="field center no-wrap language">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#b07219" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
            Java
          </div>
        
          <div class="field center no-wrap language">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#4F5D95" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
            PHP
          </div>
        
          <div class="field center no-wrap language">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="#2b7489" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
            TypeScript
          </div>
        
      </div>
    
  </section>

      
        
      
        
      
        
  <div class="row">
    <section>
      <h2 class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z"/></svg>
        PageSpeed Insights
      </h2>
      <div class="field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/></svg>
        https://arthurdw.com
      </div>
    </section>
  </div>
  
    <section>
      <div class="row fill-width">
        <section class="categories">
          
            <div class="categorie column">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="50" height="50" class="gauge high">
                <circle class="gauge-base" r="53" cx="60" cy="60"/>
                
                  <circle class="gauge-arc" transform="rotate(-90 60 60)" r="53" cx="60" cy="60" stroke-dasharray="319.13 329"/>
                  <text x="60" y="60" dominant-baseline="central">97</text>
                
              </svg>
              <span class="title">Performance</span>
            </div>
          
            <div class="categorie column">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="50" height="50" class="gauge average">
                <circle class="gauge-base" r="53" cx="60" cy="60"/>
                
                  <circle class="gauge-arc" transform="rotate(-90 60 60)" r="53" cx="60" cy="60" stroke-dasharray="286.23 329"/>
                  <text x="60" y="60" dominant-baseline="central">87</text>
                
              </svg>
              <span class="title">Accessibility</span>
            </div>
          
            <div class="categorie column">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="50" height="50" class="gauge high">
                <circle class="gauge-base" r="53" cx="60" cy="60"/>
                
                  <circle class="gauge-arc" transform="rotate(-90 60 60)" r="53" cx="60" cy="60" stroke-dasharray="329 329"/>
                  <text x="60" y="60" dominant-baseline="central">100</text>
                
              </svg>
              <span class="title">Best Practices</span>
            </div>
          
            <div class="categorie column">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="50" height="50" class="gauge high">
                <circle class="gauge-base" r="53" cx="60" cy="60"/>
                
                  <circle class="gauge-arc" transform="rotate(-90 60 60)" r="53" cx="60" cy="60" stroke-dasharray="329 329"/>
                  <text x="60" y="60" dominant-baseline="central">100</text>
                
              </svg>
              <span class="title">SEO</span>
            </div>
          
        </section>
      </div>
    </section>
    
    
  

      
        
      
        
      
        
      
        
      
        
      
        
  <section>
    <h2 class="field">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.75 0a.75.75 0 01.75.75V2h5V.75a.75.75 0 011.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 014.75 0zm0 3.5h8.5a.25.25 0 01.25.25V6h-11V3.75a.25.25 0 01.25-.25h2zm-2.25 4v6.75c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V7.5h-11z"/></svg>
      Contributions calendar
    </h2>
    <div class="row">
      <section>
        
      </section>
      
        <section>
          <div class="field">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"/></svg>
            Current streak 0 days
          </div>
          <div class="field">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"/></svg>
            ~4.52 commits per day
          </div>
        </section>
      
    </div>
    
      
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="margin-top: -52px;" viewBox="0,0 480,170">
              
                <filter id="brightness1">
                  <feComponentTransfer>
                    <feFuncR type="linear" slope="0.6"/><feFuncG type="linear" slope="0.6"/><feFuncB type="linear" slope="0.6"/>
                  </feComponentTransfer>
                </filter>
                <filter id="brightness2">
                  <feComponentTransfer>
                    <feFuncR type="linear" slope="0.19999999999999996"/><feFuncG type="linear" slope="0.19999999999999996"/><feFuncB type="linear" slope="0.19999999999999996"/>
                  </feComponentTransfer>
                </filter>
              <g transform="scale(4) translate(12, 0)"><g transform="translate(0, 0)">
                    <g transform="translate(0, 5.63855421686747)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.060240963855422)">
                      <path fill="#216e39" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#216e39" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.9397590361445785 0,1.9397590361445785 z"/>
                      <path fill="#216e39" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.9397590361445785 1.7,2.9397590361445785 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.349397590361445)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.6506024096385543 0,1.6506024096385543 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.6506024096385543 1.7,2.6506024096385543 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.060240963855422)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.9397590361445785 0,1.9397590361445785 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.9397590361445785 1.7,2.9397590361445785 z"/>
                    </g></g><g transform="translate(1.7, 1)">
                    <g transform="translate(0, 5.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g></g><g transform="translate(3.4, 2)">
                    <g transform="translate(0, 5.204819277108434)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.7951807228915664 0,1.7951807228915664 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.7951807228915664 1.7,2.7951807228915664 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.493975903614459)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.5060240963855422 0,1.5060240963855422 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.5060240963855422 1.7,2.5060240963855422 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.421686746987952)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.5783132530120483 0,1.5783132530120483 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.5783132530120483 1.7,2.5783132530120483 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g></g><g transform="translate(5.1, 3)">
                    <g transform="translate(0, 6)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.638554216867469)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-8.5, 9.843373493975903)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.1566265060240966 0,2.1566265060240966 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.1566265060240966 1.7,3.1566265060240966 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.27710843373494)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.7228915662650603 0,1.7228915662650603 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.7228915662650603 1.7,2.7228915662650603 z"/>
                    </g></g><g transform="translate(6.8, 4)">
                    <g transform="translate(0, 6)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.132530120481928)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.8674698795180724 0,1.8674698795180722 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.8674698795180722 1.7,2.8674698795180724 z"/>
                    </g></g><g transform="translate(8.5, 5)">
                    <g transform="translate(0, 5.132530120481928)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.8674698795180724 0,1.8674698795180722 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.8674698795180722 1.7,2.8674698795180724 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.783132530120482)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 12)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g></g><g transform="translate(10.2, 6)">
                    <g transform="translate(0, 5.132530120481928)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.8674698795180724 0,1.8674698795180722 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.8674698795180722 1.7,2.8674698795180724 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.27710843373494)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.7228915662650603 0,1.7228915662650603 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.7228915662650603 1.7,2.7228915662650603 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.493975903614459)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.5060240963855422 0,1.5060240963855422 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.5060240963855422 1.7,2.5060240963855422 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g></g><g transform="translate(11.9, 7)">
                    <g transform="translate(0, 5.349397590361446)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.6506024096385543 0,1.6506024096385543 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.6506024096385543 1.7,2.6506024096385543 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 12)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g></g><g transform="translate(13.6, 8)">
                    <g transform="translate(0, 6)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-1.7, 7)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.493975903614459)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.5060240963855422 0,1.5060240963855422 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.5060240963855422 1.7,2.5060240963855422 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 12)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g></g><g transform="translate(15.299999999999999, 9)">
                    <g transform="translate(0, 6)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-1.7, 7)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g></g><g transform="translate(17, 10)">
                    <g transform="translate(0, 6)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.783132530120482)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g></g><g transform="translate(18.7, 11)">
                    <g transform="translate(0, 5.63855421686747)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 12)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g></g><g transform="translate(20.4, 12)">
                    <g transform="translate(0, 6)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.638554216867469)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.27710843373494)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.7228915662650603 0,1.7228915662650603 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.7228915662650603 1.7,2.7228915662650603 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g></g><g transform="translate(22.099999999999998, 13)">
                    <g transform="translate(0, 6)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.132530120481928)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.8674698795180724 0,1.8674698795180722 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.8674698795180722 1.7,2.8674698795180724 z"/>
                    </g></g><g transform="translate(23.8, 14)">
                    <g transform="translate(0, 5.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.349397590361446)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.6506024096385543 0,1.6506024096385543 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.6506024096385543 1.7,2.6506024096385543 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 12)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g></g><g transform="translate(25.5, 15)">
                    <g transform="translate(0, 5.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-1.7, 7)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.204819277108435)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.7951807228915664 0,1.7951807228915664 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.7951807228915664 1.7,2.7951807228915664 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-10.2, 10.409638554216867)">
                      <path fill="#216e39" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#216e39" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.5903614457831328 0,2.5903614457831328 z"/>
                      <path fill="#216e39" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.5903614457831328 1.7,3.5903614457831328 z"/>
                    </g></g><g transform="translate(27.2, 16)">
                    <g transform="translate(0, 5.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-1.7, 7)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-6.8, 8.987951807228916)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.0120481927710845 0,2.0120481927710845 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.0120481927710845 1.7,3.0120481927710845 z"/>
                    </g>
                    <g transform="translate(-8.5, 5)">
                      <path fill="#216e39" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#216e39" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,8 0,7 z"/>
                      <path fill="#216e39" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,7 1.7,8 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g></g><g transform="translate(28.9, 17)">
                    <g transform="translate(0, 5.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-1.7, 7)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 10)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 9.542168674698795)">
                      <path fill="#216e39" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#216e39" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,4.457831325301205 0,3.4578313253012047 z"/>
                      <path fill="#216e39" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,3.4578313253012047 1.7,4.457831325301205 z"/>
                    </g></g><g transform="translate(30.599999999999998, 18)">
                    <g transform="translate(0, 4.409638554216867)">
                      <path fill="#216e39" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#216e39" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.5903614457831328 0,2.5903614457831328 z"/>
                      <path fill="#216e39" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.5903614457831328 1.7,3.5903614457831328 z"/>
                    </g>
                    <g transform="translate(-1.7, 5.9879518072289155)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.0120481927710845 0,2.0120481927710845 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.0120481927710845 1.7,3.0120481927710845 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g></g><g transform="translate(32.3, 19)">
                    <g transform="translate(0, 5.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.421686746987952)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.5783132530120483 0,1.5783132530120483 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.5783132530120483 1.7,2.5783132530120483 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.27710843373494)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.7228915662650603 0,1.7228915662650603 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.7228915662650603 1.7,2.7228915662650603 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g></g><g transform="translate(34, 20)">
                    <g transform="translate(0, 5.63855421686747)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.783132530120482)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-5.1, 7.9879518072289155)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.0120481927710845 0,2.0120481927710845 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.0120481927710845 1.7,3.0120481927710845 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.132530120481928)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.8674698795180724 0,1.8674698795180722 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.8674698795180722 1.7,2.8674698795180724 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g></g><g transform="translate(35.699999999999996, 21)">
                    <g transform="translate(0, 5.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-5.1, 7.771084337349397)">
                      <path fill="#216e39" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#216e39" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.2289156626506026 0,2.2289156626506026 z"/>
                      <path fill="#216e39" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.2289156626506026 1.7,3.2289156626506026 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.638554216867469)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.638554216867469)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-10.2, 10.91566265060241)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.0843373493975905 0,2.0843373493975905 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.0843373493975905 1.7,3.0843373493975905 z"/>
                    </g></g><g transform="translate(37.4, 22)">
                    <g transform="translate(0, 5.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-1.7, 5.843373493975903)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,3.1566265060240966 0,2.1566265060240966 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,2.1566265060240966 1.7,3.1566265060240966 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.63855421686747)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.638554216867469)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.36144578313253 0,1.3614457831325302 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.3614457831325302 1.7,2.36144578313253 z"/>
                    </g>
                    <g transform="translate(-6.8, 10)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.132530120481928)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.8674698795180724 0,1.8674698795180722 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.8674698795180722 1.7,2.8674698795180724 z"/>
                    </g></g><g transform="translate(39.1, 23)">
                    <g transform="translate(0, 6)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.493975903614459)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.5060240963855422 0,1.5060240963855422 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.5060240963855422 1.7,2.5060240963855422 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-6.8, 10)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.349397590361445)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.6506024096385543 0,1.6506024096385543 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.6506024096385543 1.7,2.6506024096385543 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.927710843373493)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g></g><g transform="translate(40.8, 24)">
                    <g transform="translate(0, 5.132530120481928)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.8674698795180724 0,1.8674698795180722 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.8674698795180722 1.7,2.8674698795180724 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-3.4, 8)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-8.5, 10.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-10.2, 11.132530120481928)">
                      <path fill="#30a14e" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#30a14e" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.8674698795180724 0,1.8674698795180722 z"/>
                      <path fill="#30a14e" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.8674698795180722 1.7,2.8674698795180724 z"/>
                    </g></g><g transform="translate(42.5, 25)">
                    <g transform="translate(0, 5.927710843373494)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.072289156626506 0,1.072289156626506 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.072289156626506 1.7,2.072289156626506 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.566265060240964)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.433734939759036 0,1.4337349397590362 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.4337349397590362 1.7,2.433734939759036 z"/>
                    </g>
                    <g transform="translate(-5.1, 8.783132530120483)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.216867469879518 0,1.216867469879518 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.216867469879518 1.7,2.216867469879518 z"/>
                    </g>
                    <g transform="translate(-6.8, 9.855421686746988)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.144578313253012 0,1.144578313253012 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.144578313253012 1.7,2.144578313253012 z"/>
                    </g>
                    <g transform="translate(-8.5, 11)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g>
                    <g transform="translate(-10.2, 12)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g></g><g transform="translate(44.199999999999996, 26)">
                    <g transform="translate(0, 5.710843373493976)">
                      <path fill="#9be9a8" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#9be9a8" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.289156626506024 0,1.2891566265060241 z"/>
                      <path fill="#9be9a8" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.2891566265060241 1.7,2.289156626506024 z"/>
                    </g>
                    <g transform="translate(-1.7, 6.27710843373494)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.7228915662650603 0,1.7228915662650603 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.7228915662650603 1.7,2.7228915662650603 z"/>
                    </g>
                    <g transform="translate(-3.4, 7.204819277108434)">
                      <path fill="#40c463" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#40c463" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2.7951807228915664 0,1.7951807228915664 z"/>
                      <path fill="#40c463" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1.7951807228915664 1.7,2.7951807228915664 z"/>
                    </g>
                    <g transform="translate(-5.1, 9)">
                      <path fill="#ebedf0" d="M1.7,2 0,1 1.7,0 3.4,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness1)" d="M0,1 1.7,2 1.7,2 0,1 z"/>
                      <path fill="#ebedf0" filter="url(#brightness2)" d="M1.7,2 3.4,1 3.4,1 1.7,2 z"/>
                    </g></g></g></svg>
    
  </section>

      
        
      
        
      
        
      
        
  <section>
    <h2 class="field">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M0 8a8 8 0 1116 0v5.25a.75.75 0 01-1.5 0V8a6.5 6.5 0 10-13 0v5.25a.75.75 0 01-1.5 0V8zm5.5 4.25a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM3 6.75C3 5.784 3.784 5 4.75 5h6.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0111.25 10h-6.5A1.75 1.75 0 013 8.25v-1.5zm1.47-.53a.75.75 0 011.06 0l.97.97.97-.97a.75.75 0 011.06 0l.97.97.97-.97a.75.75 0 111.06 1.06l-1.5 1.5a.75.75 0 01-1.06 0L8 7.81l-.97.97a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 010-1.06z"/></svg>
      Recent activity
    </h2>
    <div class="row">
      <section>
        
          
          
            <div class="row fill-width">
              <section class="activity">
                
                
                
                
                
                
                
                
                
                  <div class="field">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>
                    Pushed 1 commit in <div class="repo">GIP-Loeka-Arthur/API-2.0</div>
                  </div>
                  <div class="details">
                    
                      <div>on branch <div class="code">master</div></div>
                    
                    
                      <div class="commit">
                        <div class="sha">#b4e2ff1</div>
                        <div class="message">✨ Reverted last commit</div>
                      </div>
                    
                  </div>
                
                
                
                
              </section>
            </div>
          
            <div class="row fill-width">
              <section class="activity">
                
                
                
                
                
                
                
                
                
                  <div class="field">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>
                    Pushed 1 commit in <div class="repo">GIP-Loeka-Arthur/API-2.0</div>
                  </div>
                  <div class="details">
                    
                      <div>on branch <div class="code">master</div></div>
                    
                    
                      <div class="commit">
                        <div class="sha">#5a20a78</div>
                        <div class="message">🧪 Testing improvements? (Still not working on my system.)</div>
                      </div>
                    
                  </div>
                
                
                
                
              </section>
            </div>
          
            <div class="row fill-width">
              <section class="activity">
                
                
                
                
                
                
                
                
                
                  <div class="field">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>
                    Pushed 1 commit in <div class="repo">XilerNet/Pi-Bday</div>
                  </div>
                  <div class="details">
                    
                      <div>on branch <div class="code">master</div></div>
                    
                    
                      <div class="commit">
                        <div class="sha">#def3fbe</div>
                        <div class="message">Delete CNAME</div>
                      </div>
                    
                  </div>
                
                
                
                
              </section>
            </div>
          
            <div class="row fill-width">
              <section class="activity">
                
                
                
                
                
                
                
                
                
                  <div class="field">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>
                    Pushed 1 commit in <div class="repo">XilerNet/Pi-Bday</div>
                  </div>
                  <div class="details">
                    
                      <div>on branch <div class="code">master</div></div>
                    
                    
                      <div class="commit">
                        <div class="sha">#24a8caf</div>
                        <div class="message">Update CNAME</div>
                      </div>
                    
                  </div>
                
                
                
                
              </section>
            </div>
          
            <div class="row fill-width">
              <section class="activity">
                
                
                
                
                
                
                
                
                
                  <div class="field">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>
                    Pushed 1 commit in <div class="repo">XilerNet/Pi-Bday</div>
                  </div>
                  <div class="details">
                    
                      <div>on branch <div class="code">master</div></div>
                    
                    
                      <div class="commit">
                        <div class="sha">#ffdd7e3</div>
                        <div class="message">Create CNAME</div>
                      </div>
                    
                  </div>
                
                
                
                
              </section>
            </div>
          
        
      </section>
    </div>
  </section>

      

      
        <footer>
          <span>These metrics include private contributions, timezone Europe/Brussels</span>
          <span>Last updated Wed, 27 Jan 2021 01:50:25 GMT with lowlighter/metrics@3.2.0</span>
        </footer>
      
      <div id="metrics-end"></div>

    </div>
  </foreignObject>

</svg>
