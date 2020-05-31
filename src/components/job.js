import React from 'react';

const Job = (props) => {
    const {place, position, logo, link, start, end} = props.job;

    return (
        <tr align='center'>
            <td>
                <img className='workedLogo' src={logo} />
            </td>
            <td className='aboutText'>
                {position} 
            </td>
            <td align='right' className='aboutTime'>
            {start} – {end}
            </td>
        </tr>
    )
}

export default Job;