import { SearchOutlined } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import { useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);
    const [focus, setFocus] = useState(false)
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

    const showInitialContent = () => {
        return (
            <div >
                <div className='flex flex-col mb-6'>
                    <h5 className='text-gray-700 text-xs font-semibold'>Categories</h5>
                    <div className='flex items-center justify-between cursor-pointer hover:bg-slate-200 p-2 rounded'>
                        <h5 className='text-gray-700 font-semibold'>Meat & Seafood</h5>
                    </div>
                    <div className='flex items-center justify-between cursor-pointer hover:bg-slate-200 p-2 rounded'>
                        <h5 className='text-gray-700 font-semibold'>Fresh Fruits</h5>
                    </div>
                    <div className='flex items-center justify-between cursor-pointer hover:bg-slate-200 p-2 rounded'>
                        <h5 className='text-gray-700 font-semibold'>Pulses & Grains</h5>
                    </div>

                </div>

                <div className='flex flex-col mb-6'>
                    <h5 className='text-gray-700 text-xs font-semibold'>Products</h5>

                    <div className='flex items-center justify-between cursor-pointer hover:bg-slate-200 p-2 rounded'>
                        <div className='flex items-center'>
                            <img className='w-12 h-12' src="https://cdn.tridge.com/CACHE/images/image/original/59/dd/68/59dd6894b2e8b491fb5c54b4195d14ef8d96ddca/76c661e1a0ef1521084975d535020a14.jpg" alt="productIMg" />
                            <div className='ml-4 flex flex-col'>
                                <h5 className='text-gray-700 font-semibold'>Wagu</h5>
                                <small className='text-gray-600'>Brazillian Meat</small>

                            </div>
                        </div>
                        <Chip label="Meat" size='small' />


                    </div>

                    <div className='flex items-center justify-between  cursor-pointer hover:bg-slate-200 p-2 rounded'>
                        <div className='flex items-center'>
                            <img className='w-12 h-12' src="https://cdn.tridge.com/CACHE/images/image/original/b2/c3/0c/b2c30cc1cbfb7f8a45e9d2259c4ab9201de35257/8c7d03ed4744d08d50573c9a7c406e27.jpg" alt="productIMg" />
                            <div className='ml-4 flex flex-col'>
                                <h5 className='text-gray-700 font-semibold'>Fresh Banana</h5>
                                <small className='text-gray-600'>Australian Fruits,</small>

                            </div>
                        </div>
                        <Chip label="Fruits" size='small' />


                    </div>
                </div>


            </div>

        )
    }
    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            notFoundContent={fetching ? <Spin size="small" /> : focus ? showInitialContent() : null}
            {...props}
            options={options}
        />
    );
}

// Usage of DebounceSelect

async function fetchUserList(username) {
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