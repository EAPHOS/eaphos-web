import PageNav from '../../../components/PageNav';

const IndustrialDetergent = () => {
  return (
    <div>
      <PageNav
        title='Industrial Detergent'
        parentTitle='Product'
        parentPath='/en/product/industrial-detergent'
        siblings={[
          {
            title: 'Industrial Detergent',
            path: '/en/product/industrial-detergent',
          },
          {
            title: 'Solvent Extractant',
            path: '/en/product/solvent-extractant',
          },
          {
            title: 'Water Treatment Solution',
            path: '/en/product/water-treatment-solution',
          },
          { title: 'Energy System', path: '/en/product/energy-system' },
          { title: 'Anode Material', path: '/en/product/anode-material' },
        ]}
        imageClass='rndTop'
      />
      <div className='s-comm container pro01 com-comm'>
        <h3>Industrial Cleaner</h3>
        <div className='pdb20'></div>
        <h1>
          CLEANTOP<span className='rr'> ® </span> , Industrial Cleaner
        </h1>
        <h5></h5>
        <div className='s-comm container'>
          <ul>
            <h4>HM 45 Mask Pre-treatment Cleaner</h4>
          </ul>
          <ul>
            <h4>HM 47A Mask Post-treatment Cleaner</h4>
          </ul>
          <ul>
            <h4>SPC 8000 Optical Cleaner</h4>
          </ul>
          <ul>
            <h4>BBP Car Bumper Recycling Cleaner</h4>
          </ul>
        </div>
      </div>
      <div className='pdt70'></div>
      <div className='s-comm container pro01 com-comm  s-pad-bt'>
        <h3>Special Ink</h3>
        <h5>Special Ink for Industrial Cleaner.</h5>
        <div className='s-comm container'>
          <ul>
            <h4>UV Ink</h4>
          </ul>
          <ul>
            <h4>QD Ink</h4>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndustrialDetergent;
