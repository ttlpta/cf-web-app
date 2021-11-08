import React from 'react'
import { useGetNewsQuery, useGetTopPageBannersQuery } from '../services/CompanyService';

const TopPage = () => {
  console.log('1');

  const { data: bannersData } = useGetTopPageBannersQuery({ companyId: 1 });
  const { data: newsData } = useGetNewsQuery({
    companyId: 1,
    lang: 2,
  });
  console.log("🚀 ~ TopPage ~ newsData", newsData)

  console.log("🚀 ~ TopPage ~ data", bannersData);



  return (
    <div>
      <p>aaaaaa</p>
    </div>
  )
}

export default TopPage
