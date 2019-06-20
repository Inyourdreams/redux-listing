import React, { useEffect, use } from 'react'
import axios from 'axios'
import './ListingPage.css'
import Loader from 'react-loader-spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import { setListingData, setIndex } from '../../modules/listingReducer'

const ListingPage = ({
  setListingData,
  listingData,
  hasMore,
  idx,
  setIndex,
}) => {
  const fetchNextData = index => {
    return axios(`/CONTENTLISTINGPAGE-PAGE${index}.json`).then(
      res => res.data.page['content-items'].content,
    )
  }

  const setListing = () => {
    console.log('&*&**&(*(&')
    fetchNextData(idx).then(r => setListingData(r))
    setIndex(idx + 1)
  }

  useEffect(() => {
    setListing()
  }, [])

  return (
    <div className="main">
      <InfiniteScroll
        dataLength={listingData.length}
        next={setListing}
        hasMore={idx < 4}
        loader={
          <div className="scroll-loader">
            <Loader type="ThreeDots" color="#68edd4" height={80} width={80} />
          </div>
        }
        endMessage={
          <p>
            <b>You've seen it all</b>
          </p>
        }
      >
        <div className="flex flex-wrap">
          {listingData.length > 0 &&
            listingData.map((item, idx) => (
              <div key={idx} className="w-1/3 h-12">
                <img
                  key={idx}
                  src={
                    item['poster-image'] === 'posterthatismissing.jpg'
                      ? require(`../../Slices/placeholder_for_missing_posters.png`)
                      : require(`../../Slices/${item['poster-image']}`)
                  }
                  alt={item.name}
                />
                <span className="listing-item-name">{item.name}</span>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    idx: state.listing.idx,
    listingData: state.listing.listingData,
    hasMore: state.listing.hasMore,
  }
}

const mapDispatchToProps = {
  setListingData,
  setIndex,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListingPage)
