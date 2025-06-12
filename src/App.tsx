import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

//페이지 컴포넌트
import MainPage from "@pages/index";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<MainPage />}></Route>
                    <Route path="/:id" element={<MainPage />}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

{/* 
    CommonNav useEffect: 
    {pathname: '/sports', search: '', hash: '', state: null, key: 'rgcvsfw1'}
    index.tsx:23 
    ValueLoadable {state: 'hasValue', contents: Array(30)}
    CommonNav.tsx:35 CommonNav useEffect: 
    {pathname: '/travel', search: '', hash: '', state: null, key: '2l62o88i'}   <== 여행으로 바꿀때 중복 에러 발생!!
    index.tsx:23 
    ValueLoadable {state: 'hasValue', contents: Array(30)}
    hook.js:608 

    Warning: Encountered two children with the same key, `eOWabmCNEdg`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. Error Component Stack
    //(경고: 동일한 키 `eOWabmCNEdg`를 가진 두 개의 자식 컴포넌트가 발견되었습니다. 구성 요소가 업데이트 시에도 동일성을 유지하도록 키는 고유해야 합니다. 고유하지 않은 키는 자식 컴포넌트가 중복되거나 누락될 수 있습니다. 이러한 동작은 지원되지 않으며 향후 버전에서 변경될 수 있습니다. 오류 구성 요소 스택)

        at div (<anonymous>)
        at div (<anonymous>)
        at div (<anonymous>)
        at index (index.tsx:18:25)
    hook.js:608 
    Warning: Encountered two children with the same key, `STV2s3FYw7Y`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. Error Component Stack
        at div (<anonymous>)
        at div (<anonymous>)
        at div (<anonymous>)
        at index (index.tsx:18:25)

    ==> 데이터가 중복되어서 발생하는 에러인 듯 하다.
*/}

export default App;
