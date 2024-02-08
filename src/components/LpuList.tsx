// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Select from 'react-select';
// import Label from './Label';

// type TLpuListProps = {
//    onLpuSelect: (selectedLpu: {
//       id: string;
//       value: string;
//       address: string;
//       label: string;
//       phone: string;
//    }) => void;
// };

// const LpuList: React.FC<TLpuListProps> = ({ onLpuSelect }) => {
//    const [lpuList, setLpuList] = useState<Array<{ id: string; value: string; address: string; label: string; phone: string; }>>([]);

//    useEffect(() => {

//       fetchData();
//    }, []);

//    const fetchData = async () => {
//       try {
//          const lpuData = await axios.get('https://reg.nso.ru/rpc/er/lpu?type=list')

//          // Преобразуем данные и создаем массив с объектами, содержащими "value" и "label"
//          const formattedLpuList = lpuData.data.response.LPU.map((lpu: { id: string; full_name: string; address: string; phone: string; }) => ({
//             id: lpu.id,
//             label: lpu.full_name,
//             value: lpu.full_name,
//             address: lpu.address,
//             phone: lpu.phone,
//          }));
//          // Получаем данные из JSON, фильтруем от "ЦРБ" и устанавливаем их в состояние
//          const filteredLpuList = formattedLpuList.filter((lpu: { label: string; }) => {
//             const lowercaseLabel = lpu.label.toLowerCase();
//             return (
//                !lowercaseLabel.includes('црб') && 
//                !lowercaseLabel.includes('рб') && 
//                !lowercaseLabel.includes('сп') && 
//                !lowercaseLabel.includes('гбуз нсо "гб №4"') && 
//                !lowercaseLabel.includes('гбуз нсо "гб № 3"') && 
//                !lowercaseLabel.includes('гбуз нсо "гкб №1"') && 
//                !lowercaseLabel.includes('гбуз нсо "гкб №34"') && 
//                !lowercaseLabel.includes('гбуз нсо "крд № 6"') && 
//                !lowercaseLabel.includes('гбуз нсо гонктб') && 
//                !lowercaseLabel.includes('гбуз нсо "нгкпц"') && 
//                !lowercaseLabel.includes('гбуз нсо "нокквд"') && 
//                !lowercaseLabel.includes('гбуз нсо "нокнд"') && 
//                !lowercaseLabel.includes('гбуз нсо "рд7"') && 
//                !lowercaseLabel.includes('гбуз нсо "родильный дом №2"') && 
//                !lowercaseLabel.includes('поликлиника гбуз нсо цкб') && 
//                !lowercaseLabel.includes('стоматологическая') && 
//                !lowercaseLabel.includes('искитимская') &&
//                !lowercaseLabel.includes('психоневрологический') &&
//                !lowercaseLabel.includes('медикофармсервис'));
//          });
//          setLpuList(filteredLpuList);
//       }
//       catch (error) {
//          console.error('Ошибка при получении данных:', error);
//          alert('Ошибка при получении данных: ' + error);
//       }
//    };

//    return (
//       <Label
//          // marginTop={'20px'}
//          text={'Наименование медицинского учреждения'}>
//       <Select
//          styles={{
//             control: () => ({
//                minHeight: '40px',
//                display: 'flex',
//                alignItems: 'center',
//                justifyContent: 'space-between',
//                border: 'none',
//                fontSize: '20px',
//                borderBottom: '1px solid gray',
//                background: '#242424',
//                borderRadius: 'none',
//             }),
//             input: (baseStyles) => ({
//                ...baseStyles,
//                color: 'white',
//                fontSize: '20px',
//                fontWeight: '700',
//             }),
//             indicatorSeparator: (baseStyles) => ({
//                ...baseStyles,
//                display: 'none',
//             }),
//             indicatorsContainer: (baseStyles) => ({
//                ...baseStyles,
//                color: 'gray'
//             }),
//             singleValue: (baseStyles) => ({
//                ...baseStyles,
//                color: 'white',
//                fontSize: '20px',
//                fontWeight: '700',
//             }),
//             noOptionsMessage: (baseStyles) => ({
//                ...baseStyles,
//                color: 'white',
//                background: '#242424',
//                border: 'none',
//             }),
//             menu: (baseStyles) => ({
//                ...baseStyles,
//                color: 'white',
//                background: '#242424',
//                border: '1px solid gray',
//             }),
//             option: (baseStyles, state) => ({
//                ...baseStyles,
//                fontSize: '16px',

//                color: state.isFocused ? 'black' : 'white',
//                background: state.isFocused ? 'gray' : '#242424',
//             }),

//          }}
//          options={lpuList}
//          className='select'
//          placeholder='Выберите / Введите ЛПУ'
//          onChange={(selectedLpu) => {
//             if (selectedLpu !== null) {
//                onLpuSelect(selectedLpu);
//             } else {
//                console.log('selectedLpu === null')
//             }
//          }}
//          noOptionsMessage={() => "ЛПУ не найдено.."}
//       />
//       </Label>
//    );
// };

// export default LpuList;

import { ConfigProvider, Select } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Label from './Label';

type TLpuListProps = {
   onLpuSelect: (selectedLpu: {
      id: string;
      value: string;
      address: string;
      label: string;
      phone: string;
   }) => void;
};

const LpuList: React.FunctionComponent<TLpuListProps> = ({ onLpuSelect }) => {
   const [lpuList, setLpuList] = useState<Array<{ id: string; value: string; address: string; label: string; phone: string; }>>([]);

   useEffect(() => {

      fetchData();
   }, []);

   const fetchData = async () => {
      try {
         const lpuData = await axios.get('https://reg.nso.ru/rpc/er/lpu', {
            params: {
               type: 'list'
            }
         })

         // Преобразуем данные и создаем массив с объектами, содержащими "value" и "label"
         const formattedLpuList = lpuData.data.response.LPU.map((lpu: { id: string; full_name: string; address: string; phone: string; }) => ({
            id: lpu.id,
            label: lpu.full_name,
            value: lpu.id,
            address: lpu.address,
            phone: lpu.phone,
         }));
         // Получаем данные из JSON, фильтруем от "ЦРБ" и устанавливаем их в состояние
         const filteredLpuList = formattedLpuList.filter((lpu: { label: string; }) => {
            const lowercaseLabel = lpu.label.toLowerCase();
            return (
               !lowercaseLabel.includes('црб') &&
               !lowercaseLabel.includes('рб') &&
               !lowercaseLabel.includes('сп') &&
               !lowercaseLabel.includes('гбуз нсо "гб №4"') &&
               !lowercaseLabel.includes('гбуз нсо "гб № 3"') &&
               !lowercaseLabel.includes('гбуз нсо "гкб №1"') &&
               !lowercaseLabel.includes('гбуз нсо "гкб №34"') &&
               !lowercaseLabel.includes('гбуз нсо "крд № 6"') &&
               !lowercaseLabel.includes('гбуз нсо гонктб') &&
               !lowercaseLabel.includes('гбуз нсо "нгкпц"') &&
               !lowercaseLabel.includes('гбуз нсо "нокквд"') &&
               !lowercaseLabel.includes('гбуз нсо "нокнд"') &&
               !lowercaseLabel.includes('гбуз нсо "рд7"') &&
               !lowercaseLabel.includes('гбуз нсо "родильный дом №2"') &&
               !lowercaseLabel.includes('поликлиника гбуз нсо цкб') &&
               !lowercaseLabel.includes('стоматологическая') &&
               !lowercaseLabel.includes('искитимская') &&
               !lowercaseLabel.includes('психоневрологический') &&
               !lowercaseLabel.includes('медикофармсервис'));
         });
         setLpuList(filteredLpuList);
      }
      catch (error) {
         console.error('Ошибка при получении данных:', error);
      }
   };


   const filterOption = (input: string, option: { label: string | undefined; } | undefined) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

   return (
      <Label text={'Название медицинского учреждения'}>
         <ConfigProvider

            theme={{
               components: {
                  Select: {
                     fontSize: 18,
                     optionSelectedFontWeight: '500',
                     colorTextPlaceholder: 'grey',
                     colorText: '#fff',
                     
                     colorBgContainer: '#242424',
                     colorBorder: '#242424',
                     colorBgElevated: '#242424',
                     optionSelectedBg: 'darkgrey',
                     optionSelectedColor: 'black',
                     optionActiveBg: 'grey',
                  },
               },
            }}
         >
            <Select
               showSearch
               placeholder='Выберите / Введите ЛПУ'
               options={lpuList.map((lpu) => ({
                  value: lpu.id,
                  label: lpu.label,
                  id: lpu.id,
                  address: lpu.address,
                  phone: lpu.phone,
               }))}
               onChange={(selectedLpu) => {
                  if (selectedLpu !== null) {
                     const lpuObj = lpuList.find((lpu) => lpu.id === selectedLpu);
                     if (lpuObj) {
                        onLpuSelect(lpuObj);
                     }
                  } else {
                     console.log('selectedLpu === null');
                  }
               }}
               filterOption={filterOption}
               notFoundContent={(
                  <div className="text-white">
                     <p>ЛПУ не найдено..</p>
                  </div>
               )}
            />
         </ConfigProvider>
      </Label>
   );
};

export default LpuList;