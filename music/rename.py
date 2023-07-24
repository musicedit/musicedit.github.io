import os
import argparse
import shutil


def work(types, op, argo):
    if types == 'edit':
        file_path = []
        sr_path = '/Users/bytedance/Desktop/musicedit/music/origin'
        tg_path = os.path.join('/Users/bytedance/Desktop/musicedit/music/', '{}_{}'.format(types, op))
        for root, dirs, files in os.walk(sr_path):
            for file in files:
                file_path.append(file)
        command_index = {}
        for f in file_path:
            if op in f:
                f_split = f.split('_')
                index = f_split[0]
                del f_split[-1]
                del f_split[0]
                operation = ' '.join(f_split)
                command_index[index] = operation
        for fi in file_path:
            if 'source' in fi:
                fs = fi.split('_')
                index = fs[0]
                prefix = 'source'
                opera = command_index[index]
            elif 'target' in fi:
                fs = fi.split('_')
                index = fs[0]
                prefix = 'target'
                opera = command_index[index]
            else:
                fs = fi.split('_')
                index = fs[0]
                prefix = argo
                opera = command_index[index]
            shutil.move(os.path.join(sr_path, fi), os.path.join(tg_path, '{0}-{1}-{2}.wav'.format(index, opera, prefix)))


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("-t", help="type", dest="type", type=str, default="edit")
    parser.add_argument("-o", help="op", dest="op", type=str, default="add")
    parser.add_argument("-a", help="argo", dest="argo", type=str, default="audit")
    # edit, audit, proposed
    args = parser.parse_args()

    work(args.type, args.op, args.argo)

