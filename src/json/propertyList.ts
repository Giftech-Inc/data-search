import Property from '../models/Property';

export const getPropertyList = () => {
  let propertyList: Property[] = [];
  const properties = [
    {
      name: '北区同心店',
      location: '大阪市北区同心2-5-13',
    },
    { name: 'キリン堂 新大阪宮原店', location: '大阪市淀川区宮原4-2-21' },
    { name: 'キリン堂 加島店', location: '大阪市淀川区加島1-53-32' },
    { name: 'キリン堂 東淀川豊新店', location: '大阪市東淀川区豊新1-5-23' },
    {
      name: '東淀川薬局 崇禅寺店(調剤)',
      location: '大阪市東淀川区東中島5-16-13',
    },
  ];
  propertyList = properties.map((p) => {
    return new Property(p);
  });
  return propertyList;
};
