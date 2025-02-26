'use client'; // Add this to indicate that this is a Client Component

import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import styles from "./page.module.css";

const CreateModule = ({ showAppDrawer, setShowAppDrawer, selectedAppName }) => {
    const [loading, setLoading] = useState(false);
    const [appFields, setAppFields] = useState([]);

    const fetchAppFields = (selectedAppName) => {
        // const mockSalesforceData = [
        //     {
        //         status: 'active',
        //         dealer_name: 'name001'
        //     },
        //     {
        //         status: 'inactive',
        //         dealer_name: 'name002'
        //     },
        // ]
        const mockSalesforceData = [
            {
              account_id: 17211,
              status: 'active',
              email_id: 'chandramoulik@tekion.com',
              dealer_first_sell_implementation_status: 'signup_completed',
              basic_detail: {
                account_dealer_id: 4465,
                dealer_name: 'Merge Dealer DG 6',
                dealer_group_name: 'Merge DealerGroup 6',
              },
              account_owner: [
                {
                  account_owner_id: 264620,
                  role: 'NADA 2024',
                  email_id: 'chandramoulik@tekion.com',
                },
                {
                  account_owner_id: 264621,
                  role: 'Solutions Manager',
                  email_id: 'egallagher@tekion.com',
                },
              ],
              account_contact: [
                {
                  account_contact_id: 8733,
                  first_name: 'Chandramouil',
                  last_name: 'K',
                  contact_id: 4319,
                  influencer_level: 'not_an_influencer',
                  email: [],
                },
              ],

              account_communication: {
                account_communication_id: 263319,
                account_id: 17211,
                advent: false,
                country: 'India',
                county: 'India',
                latitude: 12.955981,
                longitude: 80.162046,
                zip_code: '600043',
                state: 'Tamil Nadu',
                city: 'Chennai',
                timezone: 'Etc/GMT+12',
                street: 'X546+JQP, Velan Nagar, Arulmurugan Nagar, Old Pallavaram, Chennai, Tamil Nadu 600043, India',
                country_code: '+1',
                phone_extension: null,
                website: 'https://test.com',
                contact_number: '',
              },
              products: [
                {
                  product_id: 2513,
                  contract_dealer_oem_makes_product_id: 50996,
                  product_name: '0001 Test Product Escalation TST',
                  product_type_name: 'Shipping Fee',
                },
                {
                  product_id: 2569,
                  contract_dealer_oem_makes_product_id: 50997,
                  product_name: '01M Image Product Test',
                  product_type_name: 'ARC',
                },
                {
                  product_id: 2387,
                  contract_dealer_oem_makes_product_id: 50998,
                  product_name: '2x2" Labels for Monarch Pathfinder 6059 (300 labels/roll)',
                  product_type_name: 'Hardware',
                },
                {
                  product_id: 2588,
                  contract_dealer_oem_makes_product_id: 50999,
                  product_name: ' !64 Sicilian Product',
                  product_type_name: 'ARC',
                },
              ],
            },
            {
              account_id: 17212,
              status: 'inactive',
              email_id: 'kumaranc@tekion.com',
              dealer_first_sell_implementation_status: 'contract_drafted',
              basic_detail: {
                account_dealer_id: 4463,
                dealer_name: 'CRM_AM_navigation_',
                dealer_group_name: 'BABA',
              },
              account_owner: [
                {
                  account_owner_id: 264616,
                  role: 'Solutions Manager',
                  email_id: 'kumaranc@tekion.com',
                },
              ],
              account_contact: [
                {
                  account_contact_id: 8731,
                  first_name: 'KUMARAN',
                  last_name: '',
                  contact_id: 4270,
                  influencer_level: 'not_an_influencer',
                  email: [],
                },
              ],
              account_communication: {
                account_communication_id: 263316,
                account_id: 17208,
                advent: false,
                country: 'United States',
                county: 'Alameda County',
                latitude: 37.695454,
                longitude: -121.899277,
                zip_code: '94588',
                state: 'California',
                city: 'Pleasanton',
                timezone: 'America/Los_Angeles',
                street: '5934 Gibraltar Dr, Pleasanton, CA 94588, USA',
                country_code: '+1',
                phone_extension: '1234',
                website: 'https://dsfaasdasd.com',
                contact_number: '8870',
              },
              products: null,
            },
            {
                account_id: 17213,
                status: 'active',
                email_id: 'kalidastekion.com',
                dealer_first_sell_implementation_status: 'pending_approval',
                basic_detail: {
                  account_dealer_id: 4464,
                  dealer_name: 'Tm Dealer 001',
                  dealer_group_name: 'BABA_Dealergroup_001',
                },
                account_owner: [
                  {
                    account_owner_id: 264617,
                    role: 'Solutions Manager',
                    email_id: 'kalidastekion.com',
                  },
                ],
                account_contact: [
                  {
                    account_contact_id: 8732,
                    first_name: 'AMARAN',
                    last_name: 'RAJ',
                    contact_id: 4271,
                    influencer_level: 'influencer',
                    email: [],
                  },
                ],
                account_communication: {
                  account_communication_id: 263317,
                  account_id: 17209,
                  advent: false,
                  country: 'United States',
                  county: 'Alameda County',
                  latitude: 37.695454,
                  longitude: -121.899277,
                  zip_code: '94588',
                  state: 'California',
                  city: 'Pleasanton',
                  timezone: 'America/Los_Angeles',
                  street: '5934 Gibraltar Dr, Pleasanton, CA 94588, USA',
                  country_code: '+1',
                  phone_extension: '1234',
                  website: 'https://dsfaasdasd.com',
                  contact_number: '8871',
                },
                products:[{
                    product_id: 2513,
                    contract_dealer_oem_makes_product_id: 50996,
                    product_name: '0001 Test Product Escalation TST',
                    product_type_name: 'Shipping Fee',
                  }] ,
              },
              {
                account_id: 17214,
                status: 'active',
                email_id: 'akk@tekion.com',
                dealer_first_sell_implementation_status: 'completed',
                basic_detail: {
                  account_dealer_id: 4465,
                  dealer_name: 'TEK DEALER ',
                  dealer_group_name: 'TEK_Dealergroup',
                },
                account_owner: [
                  {
                    account_owner_id: 264618,
                    role: 'NADA 2025',
                    email_id: 'akk@tekion.com',
                  },
                ],
                account_contact: [
                  {
                    account_contact_id: 8732,
                    first_name: 'Anitha',
                    last_name: 'K',
                    contact_id: 4272,
                    influencer_level: 'influencer',
                    email: [],
                  },
                ],
                account_communication: {
                  account_communication_id: 263318,
                  account_id: 17210,
                  advent: false,
                  country: 'United States',
                  county: 'Alameda County',
                  latitude: 37.695454,
                  longitude: -121.899277,
                  zip_code: '94588',
                  state: 'California',
                  city: 'Pleasanton',
                  timezone: 'America/Los_Angeles',
                  street: '5934 Gibraltar Dr, Pleasanton, CA 94588, USA',
                  country_code: '+1',
                  phone_extension: '1234',
                  website: 'https://dsfaasdasd.com',
                  contact_number: '8876',
                },
                products:[{
                    product_id: 2513,
                    contract_dealer_oem_makes_product_id: 50996,
                    product_name: '0001 Test Product Escalation TST',
                    product_type_name: 'Shipping Fee',
                  },  {
                    product_id: 2588,
                    contract_dealer_oem_makes_product_id: 50999,
                    product_name: ' !64 Sicilian Product',
                    product_type_name: 'ARC',
                  },
                ] ,
              }, 
          ];

        const mockTmData = [
            {
                task_name: 'Task Name 1',
                task_id: 100,
                assignee: 'Akila',
                status: 'new',
                story_points: 3,
                start_date: '10/02/2025',
                week_worked_on: 'week5'
            },
            {
                task_name: 'Task Name 2',
                task_id: 101,
                assignee: 'Banu',
                status: 'completed',
                story_points: 1,
                start_date: '26/02/2025',
                week_worked_on: 'week2'
            },
            {
                task_name: 'Task Name 3',
                task_id: 102,
                assignee: 'Chandru new task',
                status: 'new',
                story_points: 3,
                start_date: '28/02/2025',
                week_worked_on: 'week5'
            },
            {
                task_name: 'Task Name 4',
                task_id: 103,
                assignee: 'Devi',
                status: 'in_progress',
                story_points: 1,
                start_date: '02/02/2025',
                week_worked_on: 'week1'
            },
        ]
        //    return Promise.resolve(mockSalesforceData)
       // let mockData = [];
            // switch(selectedAppName) {
            //     case 'tm': mockData = mockTmData;
            //     case 'salesforce': mockData = mockSalesforceData;
             
            //     default: mockData= [];
            // }
        return new Promise((resolve) => {
            setTimeout(() => {
                switch (selectedAppName) {
                    case 'tm':
                      resolve(mockTmData);
                      break;
                    case 'salesforce':
                      resolve(mockSalesforceData);
                      break;
                    default:
                      reject([]);
                  }
            }, 2000);
        });
    }

    useEffect(() => {
        setLoading(true);
            fetchAppFields(selectedAppName).then((res) => {
                console.log('fetchAppFields success', { res });
                setAppFields(res);
                setLoading(false);
            }).catch(() => {
                console.log('fetchAppFields failed');
                setLoading(false);
            })
    }, [selectedAppName])

    console.log('create Module', {selectedAppName, appFields});

    return (
        <Drawer
            closable
            destroyOnClose
            title={<p>Create Module Drawer</p>}
            width="60%"
            placement="right"
            open={showAppDrawer}
            loading={loading}
            onClose={() => setShowAppDrawer(false)}
        >

            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    );
};

export default CreateModule;
