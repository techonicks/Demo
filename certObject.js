const certLinks = {
    '24TONCDA001': ['1u-ofQtkODFVVsnU9UFofREyTubTvP4eS', 'Soukarya Samanta', '20th January 2024'],
    '24TONCDA002': ['1zqPfYaEwz2XTamyc5uoYP0rV3aw2RgwQ', 'Sayan Sutradhar', '20th January 2024'],
    '24TONCDA003': ['1bkHGT-TqEZuSBNG9TiMaJDkvWJXueEdD', 'Samrat Mondal', '20th January 2024'],
    '24TONCDA004': ['1o9l-5A60Z-47AwQm6nYKuqug9-BUeWn2', 'Ayan Das', '20th January 2024'],
    '24TONCDA005': ['1nic5U90bBkf7xzK3MSr36tiYRM9IbkKv', 'Mrittika Dutta', '20th January 2024'],
    '24TONCDA006': ['1PTd2V5F56cXJhHKPp_jIIaQ7Pz3xA_YI', 'Asif Mandal', '20th January 2024'],
    '24TONCDA007': ['18xwk2hz5FyZpgowI1mNF9O7dIPoHnnbm', 'Sourav Kumar', '20th January 2024'],
    '24TONCDA008': ['1rHis18a1HTcWFZXFVJr-KIhK0Fy2mUqP', 'Debraj Mondal', '20th January 2024'],
    '24TONCDA009': ['1--3_xWFC8kM14pf1Z7Kxm3sO_a8PMKeN', 'Roopam Barman', '20th January 2024'],
    '24TONCDP001': ['1oraHjW_xl7Tgytpy_rfAf2kHpfozq1TV', 'Soumyajit Pandit', '20th January 2024'],
    '24TONCDP002': ['1eaMkX_-awby_Y-XBYCWeO6fJA_rBS-Jr', 'Biraj Sarkar', '20th January 2024'],
    '24TONCDP003': ['1uTkHQ_Pau3h0uDwdgMrEbSdDZiUqZF3X', 'Anwesha Ghosh', '20th January 2024'],
    '24TONCDP004': ['1TY4auOWeN8oxGO9_zVaKBks08GRAxlzt', 'Sayan Sarkar', '20th January 2024'],
    '24TONCDP005': ['1pLx_r22evSf8_ecIwRbbiRXDTaOhjlJ2', 'Ayushi Sarkar', '20th January 2024'],
    '24TONCDP006': ['1gNErstB5C8TeDajQ3OBiiaCpMgdH-mCy', 'Debarpan Deb', '20th January 2024'],
    '24TONEWA001': ['19r_ApvyymSog5-uiY0o4c5_7Wzuk2a5q', 'Soukarya Samanta', '12th January 2024'],
    '24TONEWA002': ['137eRFSE1O6zRquCEc5BTbP830uQnZUz9', 'Sayan Sutradhar', '12th January 2024'],
    '24TONEWA003': ['1wrT3MHlXZJsboYrJoEzCRVlOPwo-K6pF', 'Samrat Mondal', '12th January 2024'],
    '24TONEWA004': ['1aG8qjsSppp4tpvb-8y5XUsvz-C5aiEUU', 'Ayan Das', '12th January 2024'],
    '24TONEWA005': ['1waPsCPhz5TK_Vfp1AvwvtTKPYM5cqEb_', 'Mrittika Dutta', '12th January 2024'],
    '24TONEWA006': ['102-VnqiBPgVwQGFPS8PnC2qrPxPBSj62', 'Asif Mandal', '12th January 2024'],
    '24TONEWA007': ['1LorkJffltsqqvOKq7rBwLf48xZeIoeZg', 'Sourav Kumar', '12th January 2024'],
    '24TONEWA008': ['1shTSnK5dJ2fBJH0aEjeNqfv2PKimYg2n', 'Debraj Mondal', '12th January 2024'],
    '24TONEWA009': ['1pXNiK37ztrNg8MaLeSnq4zVIrYefCWhA', 'Roopam Barman', '12th January 2024'],
    '24TONEWP001': ['1bPqHntM43wecRKhVPDKOa7tGAvubyaFT', 'Bidisha Malik', '12th January 2024'],
    '24TONEWP002': ['1g25bYfbldVWG704WWLGUzxLPoV0eS0po', 'Anwesha Ghosh', '12th January 2024'],
    '24TONEWP003': ['17KNGdBnwf0zv3hnM6f80O57jVH1R8Nm8', 'Ayushi Sarkar', '12th January 2024'],
    '24TONEWP004': ['14yLLorMKPHJltCVBxWnixV2_lDwtVPWy', 'Rupayan Sarkar', '12th January 2024'],
    '24TONEWP005': ['1Gh_NAivBVIQxp1T_8L9hlSkWCbxJlh0C', 'Soumyajit Pandit', '12th January 2024'],
    '24TONEWP006': ['191VD5MNnONms5lNDqJBq3nKuKGfsqp3Z', 'Swarnali Talukdar', '12th January 2024'],
    '24TONEWP007': ['1oTf1HbeqChiebT_8MGdmQqPt0KgpBFzx', 'Shubhojit Hazra', '12th January 2024'],
    '24TONEWP008': ['1HJN9O1EKRpRs6Kh83f-nxSiKvp74adfV', 'Plaban Sarkar', '12th January 2024'],
    '24TONEWP009': ['10v8gddb4uBZmAunr4b-1AQnefu5FR8KY', 'Shinjini Saila', '12th January 2024'],
    '24TONEWP010': ['1HQNoLtb_SA6WAbiiHyLTV_sEXXf1jFlH', 'Premjit Karak', '12th January 2024'],
    '24TONEWP011': ['1VCa3vRTzQKMHcYpJrCOvxHHqdT7Jn3TQ', 'Tanistha Sarkar', '12th January 2024'],
    '24TONEWP012': ['1m_WLdiTUgtsvnIjpUMbMSGm2u9GHT2FG', 'Ashish Rawat', '12th January 2024'],
    '24TONEWP013': ['1vn4Ur7UVxrOF6f6NzAbjIfsFqAixWxxQ', 'Pratyush Kundu', '12th January 2024'],
    '24TONEWP014': ['14-YvpxNbUscofedq4T8aRJ3o-HGHKPkj', 'Aritra Banerjee', '12th January 2024'],
}