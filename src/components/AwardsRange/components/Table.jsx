import { InfoTable } from '../../../styles/global'
import { SubTitle } from './style'

export function Table({ subtitle, infos }) {

  return (
    <>
       <SubTitle>{subtitle}</SubTitle>
       <InfoTable>
        <thead>
          <tr>
            <th>Producer</th>
            <th>Interval</th>
            <th>Previous Year</th>
            <th>Following Year</th>
          </tr>
        </thead>
        <tbody>
          {
            infos.map((info) => {
              return (
                <tr key={info.producer}>
                  <td>{info.producer}</td>
                  <td>{info.interval}</td>
                  <td>{info.previousWin}</td>
                  <td>{info.followingWin}</td>
                </tr>
              )
            })
          }
        </tbody>
       </InfoTable>
    </>
  )
}