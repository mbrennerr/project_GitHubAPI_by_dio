import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%;
margin-top: 16px;
@media(max-width: 800px) {
    width:90vw;  
  }  

`;

// container das duas tabs;

export const WrapperTabList = styled(TabList)`
list-style-type: none;
justify-content: center;
padding: 4px;
display: flex;
margin: 0;
/* border: 1px solid red; */


`;
WrapperTabList.tabsRole = "TabList";

// as duas Tabs;
export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: solid 1px #ccc;
/* width: 50%; */
padding: 16px;
user-select: none;
cursor: pointer;
z-index:10000;
background-color: #ffff;
margin: 8px;
/* border: 1px solid blue; */

&:focus {
  outline: none;
}

&.is-selected {
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
}

`;
WrapperTab.tabsRole = "Tab";


export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;
  /* border: solid 1px yellow; */


  &.is-selected {
    display: block;
  }

`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  

  
`;

