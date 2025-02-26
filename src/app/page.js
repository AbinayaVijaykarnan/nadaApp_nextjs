'use client'; // Add this to indicate that this is a Client Component

import React, { useState, useEffect } from 'react';
import { Button, Modal, Select, Radio , Checkbox } from 'antd';
// import Button from 'tcomponents/atoms/Button/Button';
import styles from "./page.module.css";
import CreateModule from './createModule';

export default function Home() {
  const [showModal, setshowModal] = useState(false);
  const [showAppDrawer, setShowAppDrawer] = useState(false);
  const [selectedAppName, setSelectedAppName] = useState('none');
  const [selectedFieldType, setSelectedFieldType] = useState('all_fields');
  const isCustomFields = selectedFieldType === 'custom_fields';

  // useEffect(()=>{
  // return () =>{
  //   console.log('Home component  unmount');
  //   setSelectedAppName('none');
  //   setSelectedAppName('all_fields');
  // }
  // },[]);

  const appOptions = [
    {
      value: 'none',
      label: 'None',
    },
    {
      value: 'salesforce',
      label: 'Salesforce',
    },
    {
      value: 'netsuite',
      label: 'Netsuite',
    },
    {
      value: 'tm',
      label: 'Task Management',
    },
  ];

  const radiooptions = [
    {
      value: 'all_fields',
      label: 'All Fields',
    },
    {
      value: 'custom_fields',
      label: 'Custom Fields',
    },
  ]

  const onCreateObjectClick = () => {
    console.log('onCreateObjectClick');
    setshowModal(true);
  };


  const handleModalOk = () => {
    console.log('handleModalOk');
    setshowModal(false);
    // setSelectedAppName('none');
    // setSelectedFieldType('all_fields');
    setShowAppDrawer(true);
  };

  const handleModalCancel = () => {
    console.log('handleModalCancel');
    setshowModal(false);
  };

  const onSelectAppName = (appName) => {
    console.log('onSelectAppName', appName);
    setSelectedAppName(appName);
  };

  const onSelectFieldType = (e) => {
    const val = e.target.value;
    console.log('onSelectFieldType', val);
    setSelectedFieldType(val);
  };

  const onSelectCheckbox = (val) => {
    console.log('onSelectCheckbox', val);
  };


  const getCheckBoxOptions = (appName) =>{ // TODO: Later do api call, and get checkbox options (i.e: field names) by application name
    let options = [];
    switch(appName){
      case 'salesforce' : options = ['dealer_name', 'dealer_group_name', 'status', 'email_id', 'products'];
      return;
      case 'tm' : options = ['']
    }

  };

  console.log({ showModal, selectedAppName , selectedFieldType});

  return (
    <div className={styles.mainPage}>
      <h2 className={styles.headerName}>Module App</h2>
      <Button
        id="create_object"
        type="primary"
        className={styles.createObjButton}
        // disabled={commentsContent?.comment_id === data.activity_comment_id}
        onClick={(e) => { onCreateObjectClick() }}>+ Create Object
      </Button>
      <Modal
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
        // styles={{minHeight: '30rem'}}
        className={styles.appModal}
        title="Application Modal"
        open={showModal}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      // okButtonProps={{ disabled: true }}
      // cancelButtonProps={{ disabled: true }}
      >
        <div className={styles.firstDiv}>
          <div className={styles.label}>Application Name</div>
          <Select
            //  style={{ width: '100%' }}
            className={styles.appSelectBox}
            showSearch
            placeholder="Select Application"
            optionFilterProp="label"
            onChange={onSelectAppName}
            onSearch={(val) => { console.log('search val', val) }}
            value={selectedAppName}
            options={appOptions}
          />
        </div>
        <div className={styles.secondDiv}>
        <div className={styles.label}>Field Type</div>
        <Radio.Group options={radiooptions} defaultValue={selectedFieldType} onChange={onSelectFieldType}/>
        {
          isCustomFields && (
           <div>
             <div className={styles.label}>Application Name</div>
             <Checkbox.Group options={getCheckBoxOptions(selectedAppName)} defaultValue={['Apple']} onChange={onSelectCheckbox} />
            </div>
          )
        }
        </div>
      </Modal>
      {
        showAppDrawer && <CreateModule showAppDrawer={showAppDrawer} setShowAppDrawer={setShowAppDrawer} selectedAppName={selectedAppName} />
      }
    </div>
  );
}
