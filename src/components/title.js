import React, { Component } from "react"

class Title extends Component {
  constructor(props) {
    super(props)

    this.fetchTimer = null

    this.state = {
      updateFreq: 3000,
      keyWordIndex: Math.floor(Math.random() * 5),
      keyWord: "",
      keyWords: ["innovative", "fast", "responsive", "safe", "reliable"],
    }
  }

  setKeyWord() {
    const { keyWords, updateFreq, keyWordIndex } = this.state

    this.setState({
      keyWord: keyWords[keyWordIndex],
      keyWordIndex: keyWordIndex < keyWords.length - 1 ? keyWordIndex + 1 : 0,
    })

    if (this.fetchTimer) {
      clearTimeout(this.fetchTimer)
    }
    if (updateFreq) {
      this.fetchTimer = setTimeout(() => this.setKeyWord(), updateFreq)
    }
  }

  componentDidMount() {
    this.setKeyWord()
  }

  render() {
    const { keyWord } = this.state
    return (
      <h1 className="p-strip__title">
        We build <span className="p-title--highlighted">{keyWord}</span>
        <br />
        websites & apps that help{" "}
        <span style={{ fontWeight: "300" }}>your businesses grow fast</span>
      </h1>
    )
  }
}

export default Title
