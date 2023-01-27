import { SearchOutlined } from '@mui/icons-material';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import { useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);
    const fetchRef = useRef(0);
    const debounceFetcher = useMemo(() => {
        const loadOptions = (value) => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;
            setOptions([]);
            setFetching(true);
            fetchOptions(value).then((newOptions) => {
                if (fetchId !== fetchRef.current) {
                    // for fetch callback order
                    return;
                }
                setOptions(newOptions);
                setFetching(false);
            });
        };
        return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);
    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
            options={options}
        />
    );
}

// Usage of DebounceSelect

async function fetchUserList(username) {
    console.log('fetching user', username);
    return fetch('https://restcountries.com/v2/name/' + username)
        .then((response) => response.json())
        .then((response) =>
            response.map((country) => ({
                label: `${country.name}`,
                value: country.alpha2Code,

            })),
        );
}
const SearchBox = (props) => {
    const [value, setValue] = useState([]);
    const dispatch = useDispatch()

    return (
        <DebounceSelect
            value={value}
            placeholder="Search countries & products"
            fetchOptions={fetchUserList}
            onChange={(newValue) => {
                dispatch({ type: "CHANGE_CURRENT_COUNTRY", payload: newValue })

            }}
            showSearch
            style={{
                width: '100%',
            }}
            // bordered={false}
            background={"#000000"}

            suffixIcon={<SearchOutlined style={{ fontSize: 26 }} />}

        />
    );
};
export default SearchBox;