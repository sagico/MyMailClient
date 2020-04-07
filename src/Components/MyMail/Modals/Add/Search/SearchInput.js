import React, { Fragment, useState } from 'react';
import {Search} from 'semantic-ui-react';

const WAIT_INTERVAL = 850;

let arr = []; 
["Sagi", "Hagever", "Hamelech", "Hahalof"].map((item) => {arr = [...arr , {name:item,title:item}]});
const SearchInput = (props) => {
    const [searchResults, setSearchResults] = useState(arr);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const timer = null;

    const onChange = (e) => {
            clearTimeout(timer);
            setSearchQuery(e.target.value);
            if(searchQuery.length > 3){
                 timer = setTimeout(triggerChange,WAIT_INTERVAL);
            }
            else {
              //  setSearchResults([]);
            }    
    }

    
    const triggerChange = () => {
        const value = searchQuery;
        setIsLoading(true);
        this.onChange();
    }

    const fillResult = async() => {
        /*AdRequest.getUsersFromAD(this.AddModalMailboxid).then(res => {
             let json = JSON.parse(JSON.stringify(res.data).split('"Username":').join('"name":'));
             json = JSON.parse(JSON.stringify(json).split('"DisplayName":').join('"title":'));
             json = JSON.parse(JSON.stringify(json).split('"Mailbox":').join('"mailbox":'));
            this.setState({usersSearchResults:json.slice(0,10),isLoading:false});
        })*/
    }

    
  return (
    <Fragment>
        <Search fluid size='large' loading={isLoading} id="search" name="search"
                        input={{icon:'search',iconPosition:'left'}} 
                        noResultsMessage={'לא נמצאו תוצאות'}
                        onSearchChange={onChange} results={searchResults} 
                        onResultSelect={props.onSelect()}  
        />
        </Fragment>     
  );
}

export default SearchInput;