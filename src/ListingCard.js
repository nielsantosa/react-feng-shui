const ListingCard = (props) => {
    const listing = props.listing;
    console.log(listing);

    return (
        <div className="listing-card">
            <div className="listing-img">
                <img src={listing.photo_url} alt="listing-photo"/>
            </div>
            <div className="listing-details">
                <a href={'https://www.99.co' + listing.listing_url} target='_blank'>
                    <div className="listing-address-line-1">
                        <div>{listing.address_line_1}</div>
                    </div>
                    <div className="listing-address-line-2">
                        <div>{listing.address_line_2}</div>
                        <div>{listing.sub_category_formatted} · {listing.attributes.completed_at} · {listing.attributes.tenure}</div>
                    </div>
                    <div className="listing-detail-1">
                        <div>{listing.attributes.bedrooms_formatted} · {listing.attributes.bathrooms_formatted} · {listing.attributes.area_size_formatted} / {listing.attributes.area_size_sqm_formatted}</div>
                    </div>
                    <div className="listing-price">
                        <div className="price-main">{listing.attributes.price_formatted}</div>
                        <div className="price-ppsf">{listing.attributes.area_ppsf_formatted}</div>
                    </div>
                </a>
            </div>
            <div className="listing-contact">
                <div className="agent-photo">
                    <img src={listing.user.photo_url} alt="listing-agent" />
                </div>
                <div className="updated-at">
                    <div>Updated at</div>
                    <div>{listing.date_formatted}</div>
                </div>
            </div>
        </div>
    )
}

export default ListingCard;