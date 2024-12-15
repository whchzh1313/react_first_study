import { useEffect, useState } from 'react'
import CommonHeader from '@/components/common/header/CommonHeader'
import Card from './components/Card'

import styles from './styles/index.module.scss'
import { CardDTO } from '../index/types/Card'
import DetailDialog from '@/components/common/dialog/DetailDialog'

// interface Props
function index() {
    const [data, setData] = useState([])
    const [imgData, setImgData] = useState<CardDTO>()
    const [open, setOpen] = useState<boolean>(false) // 이미지 상세 다이얼로그 발생(관리) State

    const getData = () => {
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

        if(getLocalStorage || getLocalStorage !== null) {
            setData(getLocalStorage)
        } else {
            setData([])
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI 부분 */}
            <CommonHeader />
            <main className={styles.page__contents}>
                {/* 데이터가 없을 경우 */}
                {data.length === 0 ? (
                    <div className={styles.page__contents__noData}>조회 가능한 데이터가 없습니다.</div>
                ) : (
                    data.map((item: CardDTO) => {
                        return <Card prop={item} handleDialog={setOpen} handleSetData={setImgData} key={item.id}/>
                    })
                )}
            </main>
            {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
        </div>
    )

    
}

export default index