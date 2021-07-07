import React from 'react';
import { Box, DataTable, Text, Heading } from 'grommet';

const data = [
  {
    id: 'b0:2a:43:52:48:c5',
    macAddress: 'b0:2a:43:52:48:c5',
    ipAddress: '192.168.0.20',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Chromecast',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 72, unit: 'Mbps' },
  },
  {
    id: '00:d0:2d:32:b6:cd',
    macAddress: '00:d0:2d:32:b6:cd',
    ipAddress: '192.168.0.24',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Gateway32B6CD',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 72, unit: 'Mbps' },
  },
  {
    id: 'd8:6c:63:46:13:03',
    macAddress: 'd8:6c:63:46:13:03',
    ipAddress: '192.168.0.19',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Amazon-Firestick',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 72, unit: 'Mbps' },
  },
  {
    id: 'f4:f5:d8:c0:e2:9c',
    macAddress: 'f4:f5:d8:c0:e2:9c',
    ipAddress: '192.168.0.21',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Google-Home',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 72, unit: 'Mbps' },
  },
  {
    id: '38:f9:d3:b7:09:4e',
    macAddress: '38:f9:d3:b7:09:4e',
    ipAddress: '192.168.0.21',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Daras-MBP',
    networkBand: { value: 5, unit: 'GHz' },
    linkRate: { value: 702, unit: 'Mbps' },
  },
  {
    id: '10:40:f3:85:67:44',
    macAddress: '10:40:f3:85:67:44',
    ipAddress: '192.168.0.13',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Daras-Air',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 78, unit: 'Mbps' },
  },
  {
    id: 'a4:f1:e8:27:e7:1c',
    macAddress: 'a4:f1:e8:27:e7:1c',
    ipAddress: '192.168.0.11',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'iPhone',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 24, unit: 'Mbps' },
  },
  {
    id: '10:e7:c6:cb:f8:58',
    macAddress: '10:e7:c6:cb:f8:58',
    ipAddress: '192.168.0.22',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'HPCBF857',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 24, unit: 'Mbps' },
  },
  {
    id: '44:07:0b:ba:1e:eb',
    macAddress: '44:07:0b:ba:1e:eb',
    ipAddress: '192.168.0.18',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Google-Home-Mini',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 72, unit: 'Mbps' },
  },
  {
    id: '00:f6:20:60:15:d0',
    macAddress: '00:f6:20:60:15:d0',
    ipAddress: '192.168.0.17',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Amazon-Alexa',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 72, unit: 'Mbps' },
  },
  {
    id: '30:fd:38:88:49:f4',
    macAddress: '30:fd:38:88:49:f4',
    ipAddress: '192.168.0.16',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'Google-Home-Mini',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 292, unit: 'Mbps' },
  },
  {
    id: '7c:b0:c2:5c:94:a5',
    macAddress: '7c:b0:c2:5c:94:a5',
    ipAddress: '192.168.0.26',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'N/A',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 6, unit: 'Mbps' },
  },
  {
    id: 'E0:5F:45:96:F4:DD',
    macAddress: 'E0:5F:45:96:F4:DD',
    ipAddress: '192.168.0.25',
    hostname: 'wh7-dureal50',
    connectionType: 'Wireless',
    category: 'Network',
    status: 'Active',
    deviceName: 'N/A',
    networkBand: { value: 2.4, unit: 'GHz' },
    linkRate: { value: 1, unit: 'Mbps' },
  },
];

const columns = [
  {
    primary: true,
    property: 'macAddress',
    header: 'MAC Address',
    render: datum => datum.macAddress,
    pin: true,
  },
  {
    property: 'ipAddress',
    header: 'IP V4',
    render: datum => <Text truncate>{datum.ipAddress}</Text>,
    size: 'xsmall',
    align: 'end',
  },
  {
    property: 'hostname',
    header: 'Hostname',
    render: datum => <Text truncate>{datum.hostname}</Text>,
    size: 'xsmall',
  },
  {
    property: 'connectionType',
    header: 'Connection Type',
  },
  {
    property: 'category',
    header: 'Category',
  },
  {
    property: 'deviceName',
    header: 'Device Name',
    render: datum => <Text truncate>{datum.deviceName}</Text>,
    size: 'xsmall',
  },
  {
    property: 'status',
    header: 'Status',
  },
  {
    property: 'networkBand.value',
    header: (
      <Text color="text-strong" weight="bold">
        Network Band{' '}
        <Text size="xsmall" weight="normal" color="text">
          (GHz)
        </Text>
      </Text>
    ),
    render: datum => datum.networkBand.value,
    align: 'end',
  },
  {
    property: 'linkRate.value',
    header: (
      <Text color="text-strong" weight="bold">
        Link Rate{' '}
        <Text size="xsmall" weight="normal" color="text">
          (Mbps)
        </Text>
      </Text>
    ),
    render: datum => datum.linkRate.value,
    align: 'end',
  },
];

export const TableFixedHeaderExample = () => (
  <>
    <Heading
      id="connected-heading"
      level={3}
      margin={{ bottom: 'medium', top: 'none' }}
    >
      Connected Devices
    </Heading>
    <Box
      align="start"
      // restricting height to demonstrate pinned header behavior
      height="medium"
      // restricting width to demonstrate pinned column behavior
      width={{ min: 'medium', max: 'large' }}
      overflow="auto"
    >
    <DataTable
      aria-describedby="connected-heading"
      data={data}
      columns={columns}
      pin
    />
    </Box>
  </>
);
