import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Wesley Mintjes - Tuinmachines Lelystad'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ fontWeight: 'bold', color: '#000' }}>Wesley Mintjes</div>
                <div style={{ fontSize: 48, marginTop: 20, color: '#666' }}>
                    Tuinmachines & Service
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
