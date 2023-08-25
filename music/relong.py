import os
import argparse
import shutil
import soundfile as sf
import numpy as np

def work(path):

    for root, dirs, files in os.walk(path):
        for file in files:
            if '.wav' in file:
                y, sr = sf.read(os.path.join(root, file))
                # print(y.shape, type(y), sr)
                if y.shape != 230400:
                    y = y[0: 230400]
                    sf.write(os.path.join(root, file), y.astype(np.float32), 24000)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("-p", help="path", dest="path", type=str, default="edit_add")
    # parser.add_argument("-l", help="length", dest="length", type=str, default="240000")
    # parser.add_argument("-a", help="argo", dest="argo", type=str, default="audit")
    # edit, audit, proposed
    args = parser.parse_args()

    work(args.path)

