const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
- :adult: My name is Timothy Pidashev! I am a 17 year old striving to learn anything and everything about software development!
- :evergreen_tree: Experienced in C#, Python, Java, and Javascript
- 👯 Open to collaborating on projects
- ✨ [Join my Discord server](https://discord.gg/EDRjZdkGBG)

<!--START_SECTION:waka-->
```text
No Activity tracked this Week
```
<!--END_SECTION:waka-->
`
console.log(readme)
