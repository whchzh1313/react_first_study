import { useState } from 'react'
import styles from './CommonSearchBar.module.scss'
import { useRecoilState } from 'recoil'
import { searchState } from '@/recoil/atoms/searchState'

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [text, setText] = useState("")
  const onChange = (event) => {
    setText(event.target.value)
    console.log(event.target.value)
  }

  const onSearch = () => {
    if(text==="") {
      // input 태그 안에 빈 값을 검색하였을 때 => default 리스트 출력
      setSearch("Korea")
    } else {
      setSearch(text) // 작성한 Input Value 값 할당
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    console.log(event)
    console.log(text)
    if(event.key === "Enter") {
      if(text==="") {
        // input 태그 안에 빈 값을 검색하였을 때 => default 리스트 출력
        setSearch("Korea")
      } else {
        setSearch(text) // 작성한 Input Value 값 할당
      }
    }
  }
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input type="text" placeholder="찾으실 이미지를 검색하세요." value={text} className={styles.searchBar__search__input} onChange={onChange} onKeyDown={handleKeyDown} />
            <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
        </div>
    </div>
  )
}

export default CommonSearchBar