import React , {useState} from 'react';
import {StyleSheet,
		Text,
		View,
		Switch
		} from 'react-native';

export default function App() {

async function update(state){
	const url = 'https://autoponicapp.up.railway.app/lights/updateLight';
                const options = {
                  method: 'PUT',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                  },
                  body: JSON.stringify({
                    "name": "Light_1",
                    "status": state

                  }),
                };
                 fetch(url, options)
                  .then(response => response.json())
                  .then(data => {
                    if(data.status=="success"){
                      alert("success")
                    }
                    else if(data.status==="failed"){
                      alert("Failed")
                    }

                  })
}
const [Enable , setEnable] = useState(false);
	
// Toggle function
const toggle = (state)=>{
	setEnable(state);
	console.log(state);
	update(state);

}

return (
	<View style={styles.container}>
	<Text style={{color : Enable ? "red" : "green"}}>
		<Text style={{fontSize:30}}>Turn Light On Off</Text>
	</Text>
	<Switch
		trackColor={{ false: "#43f746", true: "#63dff2" }}
		thumbColor={Enable ? "#faf68c" : "#e243f7"}
		onValueChange={toggle}
		value={Enable}
		style={{ transform: [{ scaleX: 3}, { scaleY: 3}] , marginTop:30}}
	/>
	</View>
);
}

const styles = StyleSheet.create({
container: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
},
});
