//import liraries

import { Appbar, IconButton } from "react-native-paper";
// create a component
const SimpleNavBarComponent = () => {
  return (
    <Appbar>
      <Appbar.Content
        title={
          <IconButton // Binance Accounts Icon (where profile information would be)
            icon={"dots-horizontal"}
            onPress={() => {
              alert("HAAAAHAHAHHA!");
            }}
          />
        }
        subtitle={"Subtitle"}
      />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={"dots-horizontal"} onPress={() => {}} />
    </Appbar>
  );
};

//make this component available to the app
export default SimpleNavBarComponent;
