import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from 'react-native'

import { UpMenu } from "../components/UpMenu";
import { InfoComponent } from "../components/upmenu/InfoComponent";
import { ReadComponent } from "../components/upmenu/ReadComponent";
import { PaymentComponent } from "../components/upmenu/PaymentComponent";
import { UserLayout } from "../layouts/UserLayout";
import useFetch from "../hooks/useFetch";
import { getLocalStorage } from "../hooks/localStorage";

export const Main = () => {
  const [component, setComponent] = useState(0);
  let content = <InfoComponent  />;
  switch (component) {
    case 0:
      content = <InfoComponent />;
      break;
    case 1:
      content = <PaymentComponent />;
      break;
    case 2:
      content = <ReadComponent />;
      break;
    default:
      break;
  }

  const [{ isLoading, response }, doFetch] = useFetch('http://91.228.154.18:8080/api/profile/info')
  const [localState, setLocalState] = useState(null)

  useEffect(()=> {
    const getToken = async () => {
      const token = await getLocalStorage('token')
      return token
    }
    getToken().then(data => {
      doFetch({
        method: 'GET',
        headers: {
          "Authorization": "Bearer " + data,
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
    })
    
  }, [])

  useEffect(()=> {
    if ( response ) {
      const a = response.Information[0]
      console.log( 'this' , a )
     setLocalState( a )
     console.log( localState )
    }

  }, [ response ])

  return (
    <UserLayout>{
      localState && 
        <ScrollView
          style={s.container}
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={false}
        >
          <Text style={s.title}>Меню пользователя</Text>
          <UpMenu  setComponent={setComponent} />
          {content}
        </ScrollView>}
    </UserLayout>
  );
};

const s = new StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#333",
    marginTop: 24
  },
  container: {
    paddingHorizontal: 24,
    marginBottom: 200
  },
})