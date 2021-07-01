import React, {useEffect, useState} from 'react';
import {View, FlatList} from "react-native";
// import tweets from "../../data/tweets";
import {API, graphqlOperation} from "aws-amplify";
import {listTweets} from "../../graphql/queries";
import Tweet from "../Tweet";


const Feed = () => {

    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(false);

    // WORKING
    const fetchTweets = async () => {
        // get the tweets from the backend and set them to the state
        setLoading(true);
        try {
            const tweetsData = await API.graphql(graphqlOperation(listTweets));
            // @ts-ignore
            setTweets(tweetsData.data.listTweets.items);

        } catch (e) {
            console.log(e);
        } finally {

        }
    }

    useEffect(() => {
        // get all the data, then component mounts
        fetchTweets();
    }, []);


    return (
        <View style={{width:"100%"}}>
            <FlatList  showsVerticalScrollIndicator={false}
                       showsHorizontalScrollIndicator={false} data={tweets} renderItem={({item}) => <Tweet tweet={item} />} keyExtractor={(item) => item.id} />
        </View>
    )
}

export default Feed;
