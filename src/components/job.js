import React from "react"

const Job = props => {
  const { place, position, logo, link, start, end } = props.job

  return (
    <tr align="center">
      <td align="center">
        <a href={link} target="_blank">
          <img className="workedLogo" src={logo} alt={link} />
        </a>
      </td>
      <td className="aboutText">{position}</td>
      <td align="right" className="aboutTime">
        {start} – {end}
      </td>
    </tr>
  )
}

export default Job
