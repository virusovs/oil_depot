import java.io.*;


public class Decoder extends FilterReader {
    /**
     * Creates a new filtered reader.
     *
     * @param in a Reader object providing the underlying stream.
     * @throws NullPointerException if <code>in</code> is <code>null</code>
     */

        protected Decoder(Reader in) {
            super(in);
        }

        public int read(){
            try {
                return decodeChar(super.read());
            } catch (IOException e) {
                e.printStackTrace();
            }
            return 0;
        }

        public int decodeChar(int charCode) {
            return (charCode/2);
        }

        public void close() {
            try {
                super.in.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
