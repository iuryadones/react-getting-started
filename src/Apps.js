import React from 'react'
import Name from './apps/App1'
import NameDict from './apps/App2'
import NameConditional from './apps/App3'
import ItIsTime from './apps/App4'
import WelcomeName from './apps/App5'
import WelcomeListName from './apps/App6'
import UserComment from './apps/App7'
import CommentDict from './apps/App8'
import CommentSplit from './apps/App9'
import ClockStatic from './apps/App10'
import NewClockStatic from './apps/App11'
import ClockRunning from './apps/App12'
import ActivateLaser from './apps/App13'
import ActionLinkOnClick from './apps/App14'
import ButtonToggle from './apps/App15'
import LoginAndLogout from './apps/App16'
import MailBoxMessages from './apps/App17'
import LoginControlUser from './apps/App18'
import Page from './apps/App19'
import Numbers from './apps/App20'
import BlogPosts from './apps/App21'
import NewBlogPosts from './apps/App22'
import FormToName from './apps/App23'
import DefaultValueInput from './apps/App24'
import NullDefaultValueInput from './apps/App25'
import CalculatorTemperature from './apps/App26'
import WelcomeDialog from './apps/App27'
import SignUpDialog from './apps/App28'


function Apps() {
  const apps = [
    {name: 'App 1 - Name', cmp: <Name />},
    {name: 'App 2 - NameDict', cmp: <NameDict />},
    {name: 'App 3 - NameConditional', cmp: <NameConditional />},
    {name: 'App 4 - ItIsTime', cmp: <ItIsTime />},
    {name: 'App 5 - WelcomeName', cmp: <WelcomeName />},
    {name: 'App 6 - WelcomeListName', cmp: <WelcomeListName />},
    {name: 'App 7 - UserComment', cmp: <UserComment />},
    {name: 'App 8 - CommentDict', cmp: <CommentDict />},
    {name: 'App 9 - CommentSplit', cmp: <CommentSplit />},
    {name: 'App 10 - ClockStatic', cmp: <ClockStatic />},
    {name: 'App 11 - NewClockStatic', cmp: <NewClockStatic />},
    {name: 'App 12 - ClockRunning', cmp: <ClockRunning />},
    {name: 'App 13 - ActivateLaser', cmp: <ActivateLaser />},
    {name: 'App 14 - ActionLinkOnClick', cmp: <ActionLinkOnClick />},
    {name: 'App 15 - ButtonToggle', cmp: <ButtonToggle />},
    {name: 'App 16 - LoginAndLogout', cmp: <LoginAndLogout />},
    {name: 'App 17 - MailBoxMessages', cmp: <MailBoxMessages />},
    {name: 'App 18 - LoginControlUser', cmp: <LoginControlUser />},
    {name: 'App 19 - Page', cmp: <Page />},
    {name: 'App 20 - Numbers', cmp: <Numbers />},
    {name: 'App 21 - BlogPosts', cmp: <BlogPosts />},
    {name: 'App 22 - NewBlogPosts', cmp: <NewBlogPosts />},
    {name: 'App 23 - FormToName', cmp: <FormToName />},
    {name: 'App 24 - DefaultValueInput', cmp: <DefaultValueInput />},
    {name: 'App 25 - NullDefaultValueInput', cmp: <NullDefaultValueInput />},
    {name: 'App 26 - CalculatorTemperature', cmp: <CalculatorTemperature />},
    {name: 'App 27 - WelcomeDialog', cmp: <WelcomeDialog />},
    {name: 'App 28 - SignUpDialog', cmp: <SignUpDialog />},
  ]

  return apps
}


export default Apps
